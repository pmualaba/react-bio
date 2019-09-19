const express = require('express')
const dgraph = require('dgraph-js')
const grpc = require('grpc')
// debian: npm rebuild grpc --target=9.5.0 --target_arch=x64 --target_platform=linux --target_libc=glibc --build-from-source
// alpine: npm rebuild grpc --target=9.5.0 --target_arch=x64 --target_platform=linux --target_libc=musl --build-from-source

const router = express.Router()
const db = require('./db')
const API = require('./../../package.core.fn/api/res')

//TODO: MIDDLEWARE SUPPORT
//TODO: ACTION FIREWALL (SINGLE POINT OF INPUT VALIDATION AND AUTHORISATION)
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
                name: 'Patrick'
            },
            meta
        )
    },
    GET_PERSONS: async (req, res, next, meta) => {
        console.log('GET_PERSONS, package.core.identity/api/api-web.js', Date.now())
        console.log('QUERY CONTEXT, req.CTX, package.core.identity/api/api-web.js')
        console.dir(req.CTX, {depth: null, colors: true})

        const result = await req.db.graph.query(db.getPersons(req.body.payload.params), req.CTX)

        API.res('GET_PERSONS', false, result, meta)
    },
    GET_USERS: async (req, res, next, meta) => {
        console.log('req.body.type', req.body.type)
        API.res(
            'GET_USERS',
            false,
            {
                name: 'Patrick'
            },
            meta
        )
    },
    GET_INSTANCE: async (req, res, next, meta) => {
        console.log('req.body.type', req.body.type)
    },
    TEST_DGRAPH: async (req, res, next, meta) => {
        console.log('TEST_DGRAPH')
        try {
            const clientStub = new dgraph.DgraphClientStub(
                // addr: optional, default: "localhost:9080"
                'localhost:9080',
                // credentials: optional, default: grpc.credentials.createInsecure()
                grpc.credentials.createInsecure()
            )
            const dgraphClient = new dgraph.DgraphClient(clientStub)

            const schema = 'name: string @index(exact) .'
            const op = new dgraph.Operation()
            op.setSchema(schema)
            await dgraphClient.alter(op)

            const txn = dgraphClient.newTxn()
            try {
                // Create data.
                const p = {
                    name: 'Alice'
                }

                // Run mutation.
                const mu = new dgraph.Mutation()
                mu.setSetJson(p)
                const assigned = await txn.mutate(mu)

                // Commit transaction.
                await txn.commit()

                console.log(`Created person named "Alice" with uid = ${assigned.getUidsMap().get('blank-0')}\n`)

                console.log('All created nodes (map from blank node names to uids):')
                assigned.getUidsMap().forEach((uid, key) => console.log(`${key} => ${uid}`))
                console.log()

                // Run query.
                const query = `query all($a: string) {
                                      all(func: eq(name, $a))
                                      {
                                        name
                                      }
                                    }`
                const vars = {$a: 'Alice'}
                const resp = await dgraphClient.newTxn().queryWithVars(query, vars)
                const ppl = resp.getJson()

                // Print results.
                console.log(`Number of people named "Alice": ${ppl.all.length}`)
                ppl.all.forEach(person => console.log(person.name))

                res.json({
                    error: null,
                    payload: {
                        count: `Number of people named "Alice": ${ppl.all.length}`,
                        people: ppl
                    }
                })
            } finally {
                await txn.discard()
                // ...
            }
        } catch (err) {
            res.json({
                error: {
                    code: -1,
                    message: err.message,
                    details: {},
                    debug: []
                },
                payload: {
                    token: ''
                }
            })
        }
    }
}
/** POST /api/cms
 *  Test Dgraph 1
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
