const express = require('express')
const axios = require('axios')

const router = express.Router()
const API = require('../../package.core.fn/api/res')

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
                }
            },
            meta
        )
    },
    GET_INITIAL_PROPS: async (req, res, next, meta) => {
        console.log('/api/package.core.ui/web/GET_INITIAL_PROPS')

        const actions = req.body.payload.actions
        const promises = actions.map(action => req.apiLogic[action.meta.package][action.meta.endpoint][action.type](req, res, next, meta, action))

        try {
            const responses = await Promise.all(promises)

            const actionsResponse = responses.reduce((response, r, i) => {
                response[actions[i].type] = {response: r}
                return response
            }, {})

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
