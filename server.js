const express = require('express')
const router = express.Router()
const LRU = require('lru-cache')
const nextjs = require('next')
const bodyParser = require('body-parser')
const cookies = require('universal-cookie-express')
const cors = require('cors')
const JsonDB = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

const Jwt = require('njwt')
const domains = require('./env.server').domains
const locale = require('./env.server').locale
const env = require('./env.server')()
console.log('   >> Server PID:', process.pid)
console.log('Environment env.server - server.js', env)
console.log('Environment domains - server.js', domains)

const getConfigSecretSigningKey = require('./packages/package.core.authentication/api/config').getConfigSecretSigningKey
const SECRET_SIGNING_KEY = getConfigSecretSigningKey()

const dev = process.env.NODE_ENV !== 'production'
const app = nextjs({dev})
const handle = app.getRequestHandler()
const stats = {reqCount: 0}

console.time('CREATING DATABASE SERVICE - server.js...')
const Database = (env.DB_NAME === 'dgraph' && require('./packages/package.core.db/driver/dgraph')) || {
    createService() {
        return {
            schema: null,
            graph: null,
            cache: null
        }
    },
    updateCache() {}
}
const db = Database.createService({
    name: env.DB_NAME,
    url: env.DB_BASE_URL,
    admin: env.DB_USER,
    password: env.DB_PASSWORD
})

db.json = {
    dna: null,
    schema: null,
    theme: null,
    i18n: null
}

console.timeEnd('CREATING DATABASE SERVICE - server.js...')

/**
 * SETUP SSR CACHE
 */
console.log('SETUP SSR CACHE')

const ssrCache = {
    5: new LRU({
        max: 100 * 1024 * 1024 /* size (100 MB) using `return n.length` as length() function */,
        length: function(n, key) {
            return n.length
        },
        maxAge: 1000 * 60 * 5 /* 5 minutes */
    }),
    15: new LRU({
        max: 100 * 1024 * 1024 /* size (100 MB) using `return n.length` as length() function */,
        length: function(n, key) {
            return n.length
        },
        maxAge: 1000 * 60 * 15 /* 15 minutes */
    }),
    renderToCache: function(req, res, actualPage, queryParams, cacheTime = 5) {
        if (cacheTime !== 5 || cacheTime !== 15) {
            cacheTime = 5
        }
        const key = req.url

        /** if page is in SSR cache, serve from cache */
        if (ssrCache[cacheTime].has(key)) {
            console.log('CACHE HIT')
            res.setHeader('x-cache', 'HIT')
            res.send(ssrCache[cacheTime].get(key))
        } else {
            /** else cache page */
            app.renderToHTML(req, res, actualPage, queryParams)
                .then(html => {
                    console.log(`CACHE MISS - CACHE PAGE FOR ${cacheTime} MINUTES`)
                    ssrCache[cacheTime].set(key, html)
                    res.setHeader('x-cache', 'MISS')
                    app.render(req, res, actualPage, queryParams)
                })
                .catch(error => {
                    console.log('SSR CACHE ERROR', error)
                })
        }
    }
}
global.ssrCache = ssrCache
app.renderToCache = ssrCache.renderToCache

app.prepare()
    .then(() => {
        const server = express()

        console.time('LOADING DNA - server.js...')
        Promise.all([JsonDB(new FileAsync('dna/db/dna.json')), JsonDB(new FileAsync('dna/db/theme.json')), JsonDB(new FileAsync('dna/db/i18n.json'))]).then(responses => {
            db.json.dna = responses[0]
            db.json.theme = responses[1]
            db.json.i18n = responses[2]
            console.timeEnd('LOADING DNA - server.js...')

            console.log('SETUP NEXT.JS ROUTER - CREATING DNA ROUTES - server.js...')
            Object.values(db.json.dna.getState()).forEach(Package => {
                Package.app &&
                    Package.app.documents &&
                    Object.values(Package.app.documents).forEach(document => {
                        const route = document.props.set.route
                        console.log('     route app:', route.match)
                        router.get(route.match, (req, res) => {
                            const actualPage = `/templates/${route.template}`
                            const queryParams = {url: req.path, locale: locale.default, ...route.params}
                            //app.renderToCache(req, res, actualPage, queryParams, 5)
                            app.render(req, res, actualPage, queryParams)
                        })
                    })
                Package.web &&
                    Package.web.documents &&
                    Object.values(Package.web.documents).forEach(document => {
                        const route = document.props.set.route
                        console.log('     route web:', route.match)

                        router.get(route.match, (req, res) => {
                            const actualPage = `/templates/${route.template}`
                            const queryParams = {url: req.path, locale: locale.default, ...route.params}
                            //app.renderToCache(req, res, actualPage, queryParams, 5)
                            app.render(req, res, actualPage, queryParams)
                        })
                    })
            })

            /**
             * CONFIG EXPRESS SERVER
             */
            server.use(bodyParser.urlencoded({extended: false}))
            server.use(bodyParser.json())
            server.use(cookies())
            server.use(cors({origin: '*'}))
            server.use(express.static('static'))

            server.use((req, res, next) => {
                req.stats = stats
                req.db = db
                next()
            })

            server.use((req, res, next) => {
                /**
                 * Prepare Context
                 */
                const BASE_URL = (req.headers.referer && `${req.headers.referer.split('//')[0]}//${req.headers.host}`) || req.headers.origin || 'http://localhost:3000'

                const domain = req.headers.host.split(':')[0] || null
                const eid = domains[BASE_URL].eid || null
                const sid = domains[BASE_URL].sid || null

                req.stats.reqCount++

                req.CTX = {
                    BASE_URL,
                    USER_ID: null,
                    SESSION_ID: null,
                    AUTHENTICATED: false,
                    ANONYMOUS: null,
                    PROTOCOL: 'HTTP',
                    origin: BASE_URL,
                    domain,
                    eid,
                    sid,
                    user: null,
                    time: null,
                    metrics: {
                        init: Date.now(),
                        tokenVerified: null,
                        userFoundInCache: null,
                        cachedUserPermissionsCalculated: null,
                        initQuery: null,
                        queryPermissionsCalculated: null
                    }
                }

                console.log('HTTP REQUEST COUNTER - server.js:', stats.reqCount)
                console.log('HTTP REQUEST URL - server.js:', req.method, req.url, 'FROM', (req.headers && req.headers.referer) || 'Referer Unknown')

                /**
                 * Authenticate User
                 */
                Jwt.verify(req.universalCookies.get('_jwt') || '', SECRET_SIGNING_KEY, (error, token = {}) => {
                    if (error) {
                        console.log('HTTP REQUEST UNAUTHENTICATED - server.js', error.message)

                        next()
                    } else {
                        /**
                         * JWT Token is Valid
                         * Complete Context
                         */
                        req.CTX.metrics.tokenVerified = Date.now()
                        req.CTX.USER_ID = token.body.sub.slice(0, 32)
                        req.CTX.SESSION_ID = token.body.sub.slice(33)
                        req.CTX.AUTHENTICATED = true
                        req.CTX.ANONYMOUS = false
                        req.CTX.user = token.body
                        req.CTX.time = Date.now()
                        if (token.body.sub === 'anonymous') {
                            req.CTX.ANONYMOUS = true
                        }
                        console.log('HTTP REQUEST AUTHENTICATED - server.js')

                        /**
                         * Init or Update Database Cache
                         */
                        console.time('HTTP REQUEST UPDATING DATABASE CACHE... - server.js')
                        Database.updateCache(req.CTX.sid, req.CTX.user, req.CTX.metrics)
                        console.timeEnd('HTTP REQUEST UPDATING DATABASE CACHE... - server.js')

                        next()
                    }
                })
            })

            /**
             * LOAD ALL PAGE ROUTES
             * LOAD ALL API ROUTES
             */
            server.use(router)
            server.use(require('./router'))
            server.use(require('./dna/router').router)

            /**
             * CONFIG NEXT.JS ROUTES
             */
            server.get('/templates/*', (req, res) => {
                res.sendStatus(404)
            })

            server.get('*', (req, res) => {
                if (req.url.includes('/sw')) {
                    const filePath = join(__dirname, 'static', 'workbox', 'sw.js')
                    app.serveStatic(req, res, filePath)
                } else if (req.url.startsWith('static/workbox/')) {
                    app.serveStatic(req, res, join(__dirname, req.url))
                } else {
                    handle(req, res)
                }
            })

            /**
             * START SERVER & SOCKET CLUSTER
             */
            server.listen(3000, err => {
                if (err) throw err
                console.log('> Ready on http://localhost:3000')
                env.WS_ENABLED && require('./sc-server')
            })
        })
    })
    .catch(ex => {
        console.error(ex.stack)
        process.exit(1)
    })
