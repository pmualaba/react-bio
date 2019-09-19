const express = require('express')
const dgraph = require('dgraph-js')
const grpc = require('grpc')
// debian: npm rebuild grpc --target=9.5.0 --target_arch=x64 --target_platform=linux --target_libc=glibc --build-from-source
// alpine: npm rebuild grpc --target=9.5.0 --target_arch=x64 --target_platform=linux --target_libc=musl --build-from-source

const router = express.Router()
const db = require('./db')
const API = require('./../../package.core.fn/api/res')

const logic = {
    GET_TEST: async (req, res, next, meta) => {
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
                name: 'Patrick'
            },
            meta
        )
    }
}
/** API /api/cms/web
 *  Test Dgraph 1
 */
router.post('/', async (req, res, next) => {
    const meta = {
        package: 'package.core.identity/api',
        res
    }

    logic[req.body.type](req, res, next, meta)
})

module.exports = {router, logic}
