const axios = require('axios')
const express = require('express')
const orderBy = require('lodash/orderBy')

const router = express.Router()
const env = require('../../../env.server')()
const getLocalApiCredentials = require('../../../package.core.authentication/api/api-fn').getLocalApiCredentials

// POST /api/global/app
router.post('/', (req, res, next) => {
    switch (req.body.type) {
        case 'GET_SELECTION':
            console.log('req.SID', req.SID)

            switch (req.body.payload.action) {
                case 'GET_CUSTOMERS':
                    console.log('GET_SELECTION/GET_CUSTOMERS')

                    axios(
                        `${env.DB_BASE_URL}/structr/rest/Identity/?sid=${req.SID}&deleted=false&pageSize=${req.body.payload.pagination.size}&page=${
                            req.body.payload.pagination.page
                        }`,
                        {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                Accept: 'application/json',
                                'x-user': env.DB_USER,
                                'x-password': env.DB_PASSWORD
                            }
                        }
                    )
                        .then(response => {
                            // console.dir(response.data, {depth: null, colors: true})
                            res.json({
                                type: 'GET_SELECTION/GET_CUSTOMERS',
                                error: false,
                                payload: {
                                    query: req.body.payload,
                                    values: response.data.result,
                                    pagination: {
                                        size: response.data.page_size,
                                        page: response.data.page,
                                        pages: response.data.page_count,
                                        items: response.data.result_count
                                    }
                                },
                                meta: {
                                    package: 'package.core.global'
                                }
                            })
                        })
                        .catch(e => {
                            res.json({error: e.message, data: []})
                        })
                    break

                default:
                    break
            }
            break

        case 'GET_MENU':
            break

        case 'GET_ADMIN_MENU':
            break

        default:
            break
    }
})

module.exports = router
