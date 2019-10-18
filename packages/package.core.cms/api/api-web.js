const express = require('express')
const axios = require('axios')

const router = express.Router()
const Transform = require('../../package.core.fn/data')

const logic = {
    GET_ARTICLES: async (req, res, next, meta, action) => {
        console.log('/api/package.core.cms/web/GET_ARTICLES')

        return new Promise((resolve, reject) => {
            resolve(req.db.json.data.get('nodes.Story').value())
        })

        /** MODX API CALL
            const response = await axios.get('https://MODX/Story/40ad48ee719c43449ad49164f1ca5574/', {
                headers: {
                    Accept: 'application/json; charset=utf-8',
                    'Content-Type': 'application/json',
                    'x-user': 'admin',
                    'x-password': 'password'
                }
            })
            return new Promise((resolve, reject) => {
                resolve(response.data.result)
            })
         */
    },
    GET_CONTENT_PAGE: async (req, res, next, meta, action) => {
        console.log('/api/package.core.cms/web/GET_CONTENT_PAGE')

        return new Promise((resolve, reject) => {
            resolve(req.db.json.data.get('nodes.ContentPage[0]').value())
        })

        /** MODX API CALL
            const response = await axios.get('https://MODX/ContentPage/40ad48ee719c43449ad49164f1ca5574/', {
                headers: {
                    Accept: 'application/json; charset=utf-8',
                    'Content-Type': 'application/json',
                    'x-user': 'admin',
                    'x-password': 'password'
                }
            })
            return new Promise((resolve, reject) => {
                resolve(response.data.result)
            })
         */
    }
}
/** API /api/package.core.cms/web
 */
router.post('/', async (req, res, next) => {
    const meta = {
        package: 'package.core.cms/api',
        res
    }

    logic[req.body.type](req, res, next, meta)
})

module.exports = {router, logic}
