import {createLogic} from 'redux-logic'
import FSA, * as ActionTypes from './actions'

import * as ErrorTypes from '../../../package.core.fn/errors'
const env = require('../../../../env.client')()

const validationLogic = createLogic({
    type: ActionTypes.AUTHENTICATE_USER,

    validate({Joi, getState, action}, allow, reject) {
        const userCredentials = action.payload

        const schema = Joi.object().keys({
            identity: Joi.string()
                .min(3)
                .required(),
            secret: Joi.string()
                .min(4)
                .required(),
            locale: Joi.string()
                .max(5)
                .required(),
            device: Joi.object()
        })

        Joi.validate(userCredentials, schema, {abortEarly: false}, (err, value) => {
            /**
             * Example value:
             * {
             *      identity: 'admin',
             *      secret: 'password',
             *      locale: 'nl_NL',
             * }
             */
            if (err === null) {
                allow(action)
            } else {
                const validationErrors = ErrorTypes.ERR_JOI(value.locale, err, false, 'package.core.authentication')
                reject(FSA(ActionTypes.UI_INPUTVALIDATION_ERROR, true, validationErrors))
            }
        })
    }
})

const processingLogic = createLogic({
    type: ActionTypes.AUTHENTICATE_USER,
    cancelType: ActionTypes.CANCEL_AUTHENTICATE_USER,
    latest: true,

    process({axios, getState, action}, dispatch, done) {
        console.log('env.BASE_URL', env.BASE_URL)
        axios
            .post(`${env.BASE_URL}/api/authentication`, {
                version: '1',
                request: 'security token',
                type: 'AUTHENTICATE_USER',
                payload: {
                    identity: action.payload.identity,
                    secret: action.payload.secret,
                    locale: action.payload.locale,
                    epoch: new Date().getTime(),
                    device: action.payload.device
                    /**
                     * Example device:
                     * {
                     *     ip: '0.0.0.0',
                     *     geoLocation: {lat: 50.9337521, lon: 4.4284945},
                     *     isMobile: false,
                     *     name: 'Google Chrome',
                     *     formFactor: 'Desktop'
                     *  }
                     **/
                },
                package: 'package.core.authentication'
            })
            .then(res => res.data.payload)
            .then(payload => {
                console.log('AUTHENTICATE_USER_SUCCESS payload', payload)
                dispatch(FSA(ActionTypes.AUTHENTICATE_USER_SUCCESS, false, payload))
                window.location.href = payload.homeUrl
            })
            .catch(err => {
                console.error(err)
                dispatch(FSA(ActionTypes.AUTHENTICATE_USER_FAILED, true, err.response.data.payload))
            })
            .then(() => done())
    }
})

export default [validationLogic, processingLogic]
