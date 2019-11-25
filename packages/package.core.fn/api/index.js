import axios from 'axios'
import socketCluster from 'socketcluster-client'
import cuid from 'cuid'

const env = require('../../../env.client')()

/**
 * WEBSOCKET CLIENT SETUP
 */
let socket = null
if (typeof window !== 'undefined' && env.WS_ENABLED) {
    const options = {
        port: (window.location.hostname !== 'localhost' && 443) || 8000,
        hostname: window.location.hostname,
        path: '/api',
        secure: (window.location.hostname !== 'localhost' && true) || false
    }

    /**
     * Create WebSocket
     */

    socket = socketCluster.create(options)
    socket.client = {
        channel: `UNICAST_${cuid()}`,
        ip: '127.0.0.1',
        device: {},
        isAuthenticated: false
    }

    socket.on('connect', function() {
        socket.client.isAuthenticated = true
        console.log('WEBSOCKET CONNECTED', socket.client)
    })

    socket.on('disconnect', function() {
        console.log('WEBSOCKET DISCONNECTED')
    })

    socket.on('error', function(error) {
        console.error('WEBSOCKET ERROR', error)
        window.__NEXT_REDUX_STORE__.dispatch(FSA('API_ERROR', true, error))
    })

    /**
     * Listen to events on channel socket.client.channel
     * Incoming events on example ('UNICAST_cjyo9u4pw0000305w8767vkpq')
     */

    socket.on(socket.client.channel, function(data) {
        window.__NEXT_REDUX_STORE__.dispatch(
            FSA('API_STOP_LOADING', false, {action: data.type}, {endpoint: data.meta.endpoint})
        )
        window.__NEXT_REDUX_STORE__.dispatch(
            FSA(`${data.type}_SUCCESS`, false, data.payload, data.meta)
        )
        data.error &&
            window.__NEXT_REDUX_STORE__.dispatch(
                FSA(`${data.type}_FAILED`, true, data.payload, data.meta)
            )
        console.log('Received "clientId" event from server with data: ', data)
    })

    const BROADCAST = socket.subscribe('BROADCAST')

    BROADCAST.on('subscribeFail', function(error) {
        console.error(`Failed to subscribe to the BROADCAST channel due to error: ${error}`)
    })

    /**
     * Listen to events on channel BROADCAST
     * Incoming events on ('BROADCAST')
     */

    BROADCAST.watch(function(data) {
        console.log('BROADCAST channel message:', data)
    })
}

/**
 * HTTP
 * Setup HTTP Client
 */
const api = axios.create({
    baseURL: env.BASE_URL,
    method: 'POST',
    withCredentials: true
})

/**
 * FSA
 * Flux Standard Action Creator
 */
export const FSA = (
    type,
    error = false,
    payload = {},
    meta = {package: 'package.core.fn/api'}
) => ({
    type,
    error,
    payload,
    meta
})

/**
 * API
 * Flux Standard Compliant API
 */
const API = async (
    type,
    error = false,
    payload = {},
    meta = {package: 'package.core.fn/api', endpoint: '/test', baseUrl: env.BASE_URL}
) => {
    if (socket && socket.client.isAuthenticated) {
        /**
         * WEBSOCKET
         */
        console.log('Protocol: ws')
        API.client = socket.client

        window.__NEXT_REDUX_STORE__.dispatch(FSA('API_START_LOADING', false, {action: type}, meta))
        socket.emit('/api', {
            body: {
                type,
                error,
                payload,
                meta: {
                    ...meta,
                    client: socket.client
                }
            }
        })
    } else {
        /**
         * HTTP
         */
        console.log('Protocol: http')
        api.interceptors.request.use(config => {
            window.__NEXT_REDUX_STORE__.dispatch(
                FSA('API_START_LOADING', false, {action: type}, meta)
            )
            return config
        })

        api.interceptors.response.use(
            resp => {
                window.__NEXT_REDUX_STORE__.dispatch(
                    FSA('API_STOP_LOADING', false, {action: type}, meta)
                )
                return resp
            },
            error => {
                window.__NEXT_REDUX_STORE__.dispatch(
                    FSA('API_STOP_LOADING', true, {action: type}, meta)
                )
                const {data, status, headers} = error.response
                if (status > 400) {
                    const message = data.message || data || 'An API error occurred'
                    window.__NEXT_REDUX_STORE__.dispatch(
                        FSA('API_ERROR', true, {action: type, message, code: status, headers}, meta)
                    )
                    window.__NEXT_REDUX_STORE__.dispatch(
                        FSA(`${type}_FAILED`, true, {message, code: status}, meta)
                    )
                }
                throw error
            }
        )

        try {
            const {data} = await api.request({
                baseURL: meta.baseUrl || env.BASE_URL,
                url: meta.endpoint,
                method: 'POST',
                data: {
                    type,
                    error,
                    payload,
                    meta
                }
            })

            window.__NEXT_REDUX_STORE__.dispatch(FSA(`${type}_SUCCESS`, false, data, meta))

            return data
        } catch (error) {
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                console.log('API Response Error', error.response)
            } else if (error.request) {
                /*
                 * The request was made but no response was received, `error.request`
                 * is an instance of XMLHttpRequest in the browser and an instance
                 * of http.ClientRequest in Node.js
                 */
                console.log('API Request Error', error.request)
            } else {
                /*
                 * Something happened in setting up the request and triggered an Error
                 */
                console.log('Error', error.message)
            }
        }
    }
}

export default API
