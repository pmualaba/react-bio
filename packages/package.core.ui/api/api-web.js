const set = require('lodash/set')

const express = require('express')
const axios = require('axios')

const router = express.Router()
const API = require('../../package.core.fn/node.js').api

const logic = {
    DISPATCH: async (req, res, next, meta) => {
        console.log('/api/package.core.ui/web/DISPATCH')

        API.res(
            'DISPATCH_RESPONSE_SUCCESS',
            false,
            {
                actions: {
                    GET_CONTENT_PAGE: {response: {}},
                    GET_ARTICLES: {response: []},
                    GET_FACEBOOK_ALBUMS: {response: []}
                }
            },
            meta
        )
    },

    GET_INITIAL_PROPS: async (req, res, next, meta) => {
        console.log('/api/package.core.ui/web/GET_INITIAL_PROPS')

        const actions = req.body.payload.actions
        req.CTX.locale = req.body.payload.locale

        const promises = actions.map(action =>
            req.apiLogic[action.meta.endpoint.split('/')[2]][action.meta.endpoint][action.type](
                req,
                res,
                next,
                meta,
                action
            )
        )

        try {
            const responses = await Promise.all(promises)

            const actionsResponse = responses.reduce((response, r, i) => {
                response[actions[i].type] = {response: r}
                return response
            }, {})

            actionsResponse.GET_I18N = {
                response: req.db.json.i18n[req.CTX.locale]
            }

            res.json({
                type: 'GET_INITIAL_PROPS_SUCCESS',
                error: false,
                payload: {
                    actions: actionsResponse
                },
                meta: {
                    package: 'package.core.ui'
                }
            })
        } catch (error) {
            res.json({
                type: 'GET_INITIAL_PROPS_FAILED',
                error: true,
                payload: {
                    actions: null,
                    error
                },
                meta: {
                    package: 'package.core.ui'
                }
            })
        }
    },

    GET_PAGE_DNA: async (req, res, next, meta) => {
        console.log('/api/package.core.ui/web/GET_PAGE_DNA')

        const sid = req.CTX.sid
        const dnaKey = req.body.payload.dnaKey
        /**
         * Prepare Page DNA
         */
        console.time('SSR PREPARE MASTER DNA... - _page.js')
        const documentDna = req.db.json.dna.get(sid + dnaKey).value()
        const _globalDna = req.db.json.dna.get(`${sid}['package.core.global'].web.global`).value()
        const theme = req.db.json.theme.get('skins.web').value()

        const globalDna = {
            ..._globalDna,
            genes: _globalDna.dna["['package.core.global'].web.global"]
        }

        !documentDna && console.log(`No DNA found for Page:  ${dnaKey}`)

        documentDna.dna &&
            Object.entries(documentDna.dna).forEach(([key, genes]) => {
                key === dnaKey
                    ? set(documentDna, 'genes', genes)
                    : set(
                          documentDna,
                          `${key.replace(`${dnaKey}.`, '').replace(/:(.*?)]/g, ']')}.genes`,
                          genes
                      )
            })

        delete documentDna.dna
        delete globalDna.dna
        console.timeEnd('SSR PREPARE MASTER DNA... - _page.js')

        res.json({
            type: 'GET_PAGE_DNA_SUCCESS',
            error: false,
            payload: {
                globalDna,
                documentDna,
                theme
            },
            meta: {
                package: 'package.core.ui'
            }
        })
    },

    GET_LAZY_PROPS: async (req, res, next, meta) => {}
}
/** API /api/cms/web
 */
router.post('/', async (req, res, next) => {
    const meta = {
        package: 'package.core.ui/api',
        res
    }

    logic[req.body.type](req, res, next, meta)
})

module.exports = {router, logic}
