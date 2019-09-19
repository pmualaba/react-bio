/* eslint-disable max-len,prefer-destructuring */
const axios = require('axios')
const express = require('express')
const Joi = require('joi')
const Jwt = require('njwt')

const env = require('../../../env.server')()
const ErrorTypes = require('./../../package.core.utils/errors')
// const getConfigJwtTokenExpiration = require('./config').getConfigJwtTokenExpiration
// const getConfigJwtTokenCookieExpiration = require('./config').getConfigJwtTokenCookieExpiration
const getConfigSecretSigningKey = require('./config').getConfigSecretSigningKey

const router = express.Router()
const SECRET_SIGNING_KEY = getConfigSecretSigningKey()

/** USE /api/authentication
 *  Input Validation Middleware
 */
router.use('/', (req, res, next) => {
    console.log('ENTER api/authentication')
    let requestPayloadSchema = null

    switch (req.body.type) {
        case 'AUTHENTICATE_USER':
            requestPayloadSchema = Joi.object().keys({
                identity: Joi.string()
                    .min(3)
                    .required(),
                secret: Joi.string()
                    .min(6)
                    .required(),
                locale: Joi.string()
                    .max(5)
                    .required(),
                epoch: Joi.number().required(),
                ip: Joi.string(),
                geoLocation: Joi.object(),
                device: Joi.object()
            })

            break
        default:
            next()
    }

    Joi.validate(req.body.payload, requestPayloadSchema, (err, value) => {
        if (err) {
            const validationErrors = ErrorTypes.ERR_JOI(
                value.locale,
                err,
                true,
                'package.core.authentication',
                ['package.core.authentication/api/authentication/AUTHENTICATE_USER_FAILED'],
                400
            )

            res.status(400).json({
                type: 'AUTHENTICATE_USER_FAILED',
                error: true,
                payload: validationErrors,
                meta: {
                    package: 'package.core.authentication',
                    api: '/api/authentication'
                }
            })
        } else {
            next()
        }
    })
})

/** POST /api/authentication
 *  Authentication & Return JWT Token
 */
router.post('/', (req, res, next) => {
    switch (req.body.type) {
        case 'AUTHENTICATE_USER':
            console.log('req', req.headers.host)
            /**
             *  Action-Received-From:
             *      /packages/package.core.authentication/components/LoginForm/logic.js
             *
             *  With-JSON-Payload:
             *      {
             *          "request": "security token",
             *          "type": "AUTHENTICATE_USER",
             *          "payload": {
             *              "identity": "pmualaba",
             *              "secret": "abc123",
             *              "locale": "nl_NL",
             *              "epoch": "1495808214",
             *              "ip": "[https://api.ipify.org/?format=json].ip",
             *              "geolocation": [50.9333, 4.4333],
             *              "device": {
             *                  "is_mobile": false,
             *                  "complete_device_name": "Google Chrome",
             *                  "form_factor": "Desktop"
             *              }
             *          },
             *          "package": "package.core.authentication"
             *      }
             */

            /** Login attempt with user credentials.
             * Structr requirements: Resource Access Grants Signature: _login/68
             *
             */
            axios
                .post(
                    `${env.DB_BASE_URL}/structr/rest/login`,
                    {
                        name: req.body.payload.identity,
                        password: req.body.payload.secret
                    },
                    {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        }
                    }
                )
                .then(response => {

                    // User Authentication succeeded, now fetch group memberships
                    if (response.data.result_count === 1) {
                        const user = response.data
                        const DB_SESSIONID = response.headers['set-cookie'][0].split(';')[0].slice(11)
                        console.log('user', user)
                        console.log('DB_SESSIONID', DB_SESSIONID)

                        axios
                            .get(
                                `${env.DB_BASE_URL}/structr/rest/User/?id=${user.result.id}`,

                                {
                                    headers: {
                                        Accept: 'application/json; charset=utf-8',
                                        'Content-Type': 'application/json',
                                        'x-user': env.DB_USER,
                                        'x-password': env.DB_PASSWORD
                                    },
                                    // extract user groups
                                    transformResponse: [
                                        json => {
                                            const data = JSON.parse(json)
                                            console.log('data', data)
                                            return {
                                                groups: data.result[0].groups.map(group => group.id),
                                                homeUrl: data.result[0].homeUrl
                                            }
                                        }
                                    ]
                                }
                            )
                            .then(response => {

                                console.log('JWT PERMISSIONS TOKEN', `${user.result.id}.${DB_SESSIONID}`, response.data)
                                const claims = {
                                    sub: `${user.result.id}.${DB_SESSIONID}`,
                                    iss: req.BASE_URL,
                                    permissions: response.data.groups,
                                    locale: req.body.payload.locale,
                                    device: req.body.payload.device
                                }

                                const jwt = Jwt.create(claims, SECRET_SIGNING_KEY)
                                jwt.setExpiration(new Date().getTime() + 60 * 60 * 1000 * 8)

                                console.log('req', req.SID)
                                console.log('req', req.headers.host)
                                req.universalCookies.set('_jwt', jwt.compact(), {
                                    httpOnly: true,
                                    secure: false, // true for production
                                    domain: req.headers.host === 'localhost:3000' ? 'localhost' : req.SID && `.${req.headers.host.split('.')[1]}.${req.headers.host.split('.')[2]}`
                                })

                                req.body.payload.secret = '****************'
                                req.universalCookies.set('_user', Object.assign({}, req.body.payload, {id: user.result.id}), {
                                    httpOnly: false,
                                    secure: false // true for production
                                })

                                res.json({
                                    type: 'AUTHENTICATE_USER_SUCCESS',
                                    error: false,
                                    payload: {
                                        userId: user.result.id,
                                        token: jwt.compact(),
                                        homeUrl: response.data.homeUrl
                                    },
                                    meta: {
                                        package: 'package.core.authentication',
                                        api: '/api/authentication'
                                    }
                                })
                            })
                            .catch(err => {
                                res.status(500).json({
                                    type: 'AUTHENTICATE_USER_FAILED',
                                    error: true,
                                    payload: {
                                        server: ErrorTypes.ERR_NODEJS(
                                            req.body.payload.locale,
                                            err,
                                            true,
                                            'package.core.authentication',
                                            [
                                                'Failed to fetch User',
                                                'usermanagement_GET_APPLICATIONS_DATA view should exist on schemaNode: User',
                                                'requested user should exist in Database'
                                            ],
                                            500
                                        )
                                    },
                                    meta: {
                                        package: 'package.core.authentication',
                                        api: '/api/authentication'
                                    }
                                })
                            })
                    }
                })
                .catch(err => {
                    console.log('err.msg', err)

                    if (err.response.status === 401) {
                        res.status(401).json({
                            type: 'AUTHENTICATE_USER_FAILED',
                            error: true,
                            payload: {
                                server: ErrorTypes.ERR_NODEJS(
                                    req.body.payload.locale,
                                    err,
                                    true,
                                    'package.core.authentication',
                                    [
                                        'Wrong identity',
                                        'Wrong secret',
                                        'Resource Access Grants for _login signature should have POST permission for Public users AND Authenticated users (bitmask 68)',
                                        'package.core.authentication/api/authentication/AUTHENTICATE_USER_FAILED'
                                    ],
                                    401
                                )
                            },
                            meta: {
                                package: 'package.core.authentication',
                                api: '/api/authentication'
                            }
                        })
                    } else {
                        res.status(503).json({
                            type: 'AUTHENTICATE_USER_FAILED',
                            error: true,
                            payload: {
                                server: ErrorTypes.ERR_NODEJS(
                                    req.body.payload.locale,
                                    err,
                                    true,
                                    'package.core.authentication',
                                    ['Authentication service unreachable', 'TCP Port not listening', 'Bad Request to Authentication service'],
                                    503
                                )
                            },
                            meta: {
                                package: 'package.core.authentication',
                                api: '/api/authentication'
                            }
                        })
                    }
                })

            break
        default:
            break
    }
})

module.exports = router
