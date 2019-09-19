/**
 * Page Router
 */

const express = require('express')

const next = require('next')
const Jwt = require('njwt')

const getConfigSecretSigningKey = require('./packages/package.core.authentication/api/config').getConfigSecretSigningKey
const SECRET_SIGNING_KEY = getConfigSecretSigningKey()

const router = express.Router()
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const locale = require('./env.server').locale

app.renderToCache = global.ssrCache.renderToCache
app.prepare()
    .then(() => {
        console.log('SETUP NEXT.JS ROUTER - CREATING CUSTOM ROUTES - router.js...')
        /** LOGIN **/
        router.get('/login', (req, res) => {
            const actualPage = '/templates/package.core.authentication/app/login'
            const queryParams = {url: req.path, module: 'login'}
            app.render(req, res, actualPage, queryParams)
        })

        /** APP **/
        router.get('/app/:module', (req, res) => {
            Jwt.verify(req.universalCookies.get('_jwt') || '', SECRET_SIGNING_KEY, (error, token) => {
                if (error) {
                    res.redirect('/login')
                } else {
                    const actualPage = `/templates/package.core.${req.params.module}/app/${req.params.module}`
                    const queryParams = {url: req.path, module: req.params.module}
                    app.render(req, res, actualPage, queryParams)
                }
            })
        })

        router.get('/app/:module/:subModule', (req, res) => {
            Jwt.verify(req.universalCookies.get('_jwt') || '', SECRET_SIGNING_KEY, (error, token) => {
                if (error) {
                    res.redirect('/login')
                } else {
                    const actualPage = `/templates/package.core.${req.params.module}/app/${req.params.subModule}`
                    const queryParams = {url: req.path, module: req.params.module, subModule: req.params.subModule}
                    app.render(req, res, actualPage, queryParams)
                }
            })
        })

        /** WEB HOME **/
        /*     router.get('/', (req, res) => {
            console.log('get/')
            const actualPage = '/templates/package.core.cms/web/home'
            const queryParams = {url: req.path, locale: locale.default}
            app.render(req, res, actualPage, queryParams)
        }) */

        router.get('/:lang(nl|fr|en)', (req, res) => {
            const actualPage = '/templates/package.core.cms/web/home'
            const queryParams = {url: req.path, locale: locale[req.params.lang]}
            app.render(req, res, actualPage, queryParams)
        })

        /** WEB CUSTOM **/
        router.get('/labs/:lab', (req, res) => {
            const actualPage = `/templates/labs/${req.params.lab}`
            const queryParams = {url: req.path, locale: locale.default}
            app.renderToCache(req, res, actualPage, queryParams, 5)
        })
    })
    .catch(ex => {
        console.error(ex.stack)
        process.exit(1)
    })

module.exports = router
