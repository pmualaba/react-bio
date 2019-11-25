const express = require('express')
// debian: npm rebuild grpc --target=9.5.0 --target_arch=x64 --target_platform=linux --target_libc=glibc --build-from-source
// alpine: npm rebuild grpc --target=9.5.0 --target_arch=x64 --target_platform=linux --target_libc=musl --build-from-source

const router = express.Router()
const API = require('../../package.core.fn/node.js').api

const logic = {
    GET_TEST: async (req, res, next, meta) => {
        console.log('req.CTX in logic', req.CTX)
        /**
         * {
         *      event: "/api",
         *      data: {
         *          type: "GET_TEST",
         *          error: false,
         *          payload: {
         *
         *          },
         *          meta: {
         *              endpoint: "/test",
         *              client: {
         *                  id: "cjyq3nlc50000305nfg8vsjvk",
         *                  ip: "127.0.0.1",
         *                  device: {}
         *              }
         *          }
         *      },
         * }
         */

        console.log('req.body.type', req.body.type)
        API.res(
            'GET_TEST',
            false,
            {
                name: 'Test'
            },
            meta
        )
    },
    GET_USERS: async (req, res, next, meta) => {
        console.log('req.body.type', req.body.type)
        API.res(
            'GET_USERS',
            false,
            {
                name: 'User'
            },
            meta
        )
    },
    GET_INSTANCE: async (req, res, next, meta) => {
        console.log('req.body.type', req.body.type)
    }
}
/** POST /api/cms
 *
 */
router.post('/', async (req, res, next) => {
    const meta = {
        package: req.body.meta.package,
        endpoint: req.body.meta.endpoint,
        res
    }

    logic[req.body.type](req, res, next, meta)
})

module.exports = {router, logic}
