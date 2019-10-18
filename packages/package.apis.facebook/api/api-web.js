const express = require('express')
const axios = require('axios')

const router = express.Router()

const logic = {
    GET_FACEBOOK_ALBUMS: async (req, res, next, meta, action) => {
        console.log('/api/package.apis.facebook/web/GET_FACEBOOK_ALBUMS')

        return new Promise((resolve, reject) => {
            resolve(req.db.json.data.get('apis.facebook.Album[0]').value())
        })

        /** VENDOR API CALL
            const response = await axios.get('https://FACEBOOK/Album/40ad48ee719c43449ad49164f1ca5574/', {
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
/** API /api/package.apis.facebook/web
 */
router.post('/', async (req, res, next) => {
    const meta = {
        package: 'package.apis.facebook/api',
        res
    }

    logic[req.body.type](req, res, next, meta)
})

module.exports = {router, logic}
