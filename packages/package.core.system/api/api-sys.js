const express = require('express')
const axios = require('axios')

const router = express.Router()
const API = require('../../package.core.fn/api/res')

const logic = {
    TEST_TIMEOUT: async (req, res, next, meta, action) => {
        console.log('/api/package.core.cms/web/TEST_TIMEOUT', action)

        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                true === true ? resolve({test: 'TEST_TIMEOUT_SUCCESS'}) : reject({reject: 'TEST_TIMEOUT_FAILED'})
            }, 3000)
        })
    },
    TEST_API: async (req, res, next, meta, action) => {
        console.log('/api/package.core.cms/web/TEST_API', action)

        API.res(
            'TEST_API_SUCCESS',
            false,
            {
                name: 'Test'
            },
            meta
        )
    }
}
/** API /api/package.core.system/sys
 */
router.post('/', async (req, res, next) => {
    const meta = {
        package: 'package.core.system/api',
        res
    }

    logic[req.body.type](req, res, next, meta)
})

module.exports = {router, logic}
