const SCWorker = require('socketcluster/scworker')
const JsonDB = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')
const Jwt = require('njwt')

const domains = require('./env.server').domains
const env = require('./env.server')()
const apiLogic = require('./dna/rna/registry.routes.api').logic

const getConfigSecretSigningKey = require('./packages/package.core.auth/api/config')
    .getConfigSecretSigningKey

const SECRET_SIGNING_KEY = getConfigSecretSigningKey()

class Worker extends SCWorker {
    run() {
        console.log('Launching SocketCluster Worker >> Worker PID:', process.pid)

        const scServer = this.scServer
        scServer.serverPayload = this.options.serverPayload

        console.time('CREATING DATABASE SERVICE - sc-worker.js...')
        const Database = {
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
        db.json = {}
        console.timeEnd('CREATING DATABASE SERVICE - sc-worker.js...')

        console.time('LOADING DNA - sc-worker.js...')
        Promise.all([
            JsonDB(new FileAsync('dna/master.json')),
            JsonDB(new FileAsync('dna/theme.json')),
            JsonDB(new FileAsync('dna/db/i18n.json')),
            JsonDB(new FileAsync('dna/db/data.json'))
        ]).then(responses => {
            db.json.dna = responses[0]
            db.json.theme = responses[1]
            db.json.i18n = responses[2]
            db.json.data = responses[3]
            console.timeEnd('LOADING DNA - sc-worker.js...')

            /**
             *   On New Client Socket Connection Attempt
             *   Socket Cluster Intercept Middleware: MIDDLEWARE_HANDSHAKE_SC
             */
            scServer.addMiddleware(scServer.MIDDLEWARE_HANDSHAKE_SC, function(req, next) {
                console.time(
                    'SOCKET CLIENT CONNECTION ATTEMPT: MIDDLEWARE_HANDSHAKE_SC - sc-worker.js'
                )

                /**
                 * Link Database Service
                 */
                req.socket.request.db = db

                /**
                 * Authenticate User
                 */
                const BASE_URL = req.socket.request.headers.origin || 'http://localhost:3000'
                const jwt =
                    req.socket.request.headers.cookie &&
                    req.socket.request.headers.cookie.split('_jwt=')[1] &&
                    req.socket.request.headers.cookie.split('_jwt=')[1].split(';')[0]

                /**
                 * Verify JWT Token
                 */
                Jwt.verify(jwt || '', SECRET_SIGNING_KEY, (error, token = {}) => {
                    /**
                     * Prepare Context Before Successful Authentication
                     */
                    req.socket.request.CTX = {
                        BASE_URL,
                        USER_ID: null,
                        SESSION_ID: null,
                        AUTHENTICATED: false,
                        ANONYMOUS: null,
                        PROTOCOL: 'WS',
                        origin: BASE_URL,
                        domain: req.socket.request.headers.host.split(':')[0] || null,
                        eid: domains[BASE_URL].eid || null,
                        sid: domains[BASE_URL].sid || null,
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

                    if (error) {
                        /**
                         * Reject Client Connection Attempt
                         */
                        console.timeEnd(
                            'SOCKET CLIENT CONNECTION ATTEMPT: MIDDLEWARE_HANDSHAKE_SC - sc-worker.js'
                        )
                        console.log(
                            'SOCKET CLIENT CONNECTION ATTEMPT: MIDDLEWARE_HANDSHAKE_SC REJECTED - sc-worker.js',
                            error.message
                        )
                        next(error, 4500)
                    } else {
                        /**
                         * Complete Context After Successful Authentication
                         */
                        req.socket.request.CTX.metrics.tokenVerified = Date.now()
                        req.socket.request.CTX.USER_ID = token.body.sub.slice(0, 32)
                        req.socket.request.CTX.SESSION_ID = token.body.sub.slice(33)
                        req.socket.request.CTX.AUTHENTICATED = true
                        req.socket.request.CTX.ANONYMOUS = false
                        req.socket.request.CTX.user = token.body
                        req.socket.request.CTX.time = Date.now()

                        if (token.body.sub === 'anonymous') {
                            req.socket.request.CTX.ANONYMOUS = true
                        }

                        console.timeEnd(
                            'SOCKET CLIENT CONNECTION ATTEMPT: MIDDLEWARE_HANDSHAKE_SC - sc-worker.js'
                        )
                        // console.log('SOCKET REQUEST CONTEXT \n', req.socket.request.CTX)
                        next()
                    }
                })
            })

            scServer.on('connection', function(socket, status) {
                console.log('SOCKET CLIENT CONNECTED')
                socket.authToken = socket.request.CTX.user
                status.isAuthenticated = true
                console.log('SOCKET authToken', socket.authToken)
                console.log('SOCKET status', status)

                console.time('SOCKET CONNECTION UPDATING DATABASE CACHE... - sc-worker.js')
                Database.updateCache(
                    socket.request.CTX.sid,
                    socket.request.CTX.user,
                    socket.request.CTX.metrics
                )
                console.timeEnd('SOCKET CONNECTION UPDATING DATABASE CACHE... - sc-worker.js')

                socket.on('/api', async function(req, res, next) {
                    req.CTX = socket.request.CTX
                    const meta = {
                        package: req.body.meta.package,
                        endpoint: req.body.meta.endpoint,
                        res: {
                            socket,
                            client: req.body.meta.client
                        }
                    }

                    apiLogic[req.body.meta.package][req.body.meta.endpoint][req.body.type](
                        req,
                        res,
                        next,
                        meta
                    )
                })

                socket.on('disconnect', function() {
                    console.log('SOCKET CLIENT DISCONNECTED')
                })
            })
        })
    }
}

new Worker()
