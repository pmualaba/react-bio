/**
 * Dependencies
 */
import React, {createContext} from 'react'
import App from 'next/app'
import Head from 'next/head'
import withRedux from 'next-redux-wrapper'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension' // import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'

import {createLogicMiddleware} from 'redux-logic'
import API from '../packages/package.core.fn/api'
import {rootLogic, rootReducer} from '../dna/redux'

const deps = {
    API
}

/**
 * Context
 */
export const AppContext = createContext()
AppContext.displayName = 'AppContext'

/**
 * Components
 */

/**
 * App
 */
export default withRedux(
    (initialState = {}) => {
        const composedEnhancer = composeWithDevTools(applyMiddleware(createLogicMiddleware(rootLogic, deps)))
        return createStore(rootReducer, initialState, composedEnhancer)
    },
    {debug: false}
)(
    class WebApp extends App {
        state = {
            renderCycle: 0
        }
        device = {
            isMobile: false,
            isLandscape: false,
            formFactor: '',
            screenSize: ''
        }
        detectScreenSize() {
            if (Modernizr.mq('(max-width: 639px)')) {
                this.device.isMobile = true
                this.device.formFactor = 'phone'
                this.device.screenSize = 'S'
            } else if (Modernizr.mq('(max-width: 991px)')) {
                this.device.isMobile = true
                this.device.formFactor = 'tablet'
                this.device.screenSize = 'M'
            } else if (Modernizr.mq('(min-width: 1800px)')) {
                this.device.isMobile = false
                this.device.formFactor = 'desktopXXL'
                this.device.screenSize = 'XXL'
            } else if (Modernizr.mq('(min-width: 1300px)')) {
                this.device.isMobile = false
                this.device.formFactor = 'desktopXL'
                this.device.screenSize = 'XL'
            } else {
                this.device.isMobile = false
                this.device.formFactor = 'desktop'
                this.device.screenSize = 'L'
            }
            this.device.isLandscape = window.matchMedia('(orientation: landscape)').matches
        }
        componentDidMount() {
            /**
             * Detect FormFactor
             */
            this.detectScreenSize()

            /**
             * Detect Orientation Change
             */
            window.addEventListener('resize', e => {
                this.detectScreenSize()
                this.setState(state => ({renderCycle: state.renderCycle + 1}))
            })
        }

        render() {
            console.log('RENDER _APP', this.state.renderCycle)
            const {Component, pageProps, store} = this.props
            return (
                <Provider store={store}>
                    <AppContext.Provider
                        value={{
                            device: this.device,
                            usr: (typeof window !== 'undefined' && JSON.parse(localStorage.getItem('usr'))) || {},
                            app: (typeof window !== 'undefined' && JSON.parse(localStorage.getItem('app'))) || {},
                            web: (typeof window !== 'undefined' && JSON.parse(localStorage.getItem('web'))) || {}
                        }}
                    >
                        <Head>
                            <script src="/static/js/modernizr-custom.js" />
                        </Head>
                        <Component {...pageProps} />
                    </AppContext.Provider>
                </Provider>
            )
        }
    }
)

/**
 *  Example ctx:
 *      ctx.req.headers: {
 *          host: 'localhost:3000',
 *          connection: 'keep-alive',
 *          'cache-control': 'max-age=0',
 *          'upgrade-insecure-requests': '1',
 *          'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.62 Safari/537.36',
 *          accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,\'*'/*;q=0.8',
 *          'accept-encoding': 'gzip, deflate, br',
 *          'accept-language': 'en-US,en;q=0.9,af;q=0.8,de;q=0.7,es;q=0.6,fr;q=0.5,nl;q=0.4',
 *          cookie: 'wurfljs_ch_65e232ed43477b2f5cb4413023548fce=1528738043467; _jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMGQ5ODMxYjM3YTk0ZGIzOTY4MmQ4NTRkOTBiN2EzMS40NjM3ZTY5ZDc2OWQxOTZhYWQ2YzFmMGY4ZGZjMDIxMGM5MHpwNWdlcmdvaWlkNWI4ZjZjdzZieTIxMzIwLjQ2MzdlNjlkNzY5ZDE5NmFhZDZjMWYwZjhkZmMwMjEwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwicGVybWlzc2lvbnMiOltdLCJqdGkiOiI1YTAzNDljNy1mOGRlLTRjN2ItYmFiMy1hNjY3ODRmYTMzNTYiLCJpYXQiOjE1MjkxNTI0NzAsImV4cCI6MTUyOTE4MTI3MH0.ZDRgA8i7ye_dIvMc9t0RXtO1wA55GRQsU9-A2kVsEG8; _user=%7B%22identity%22%3A%22pluss%40qualitygarage.be%22%2C%22secret%22%3A%22****************%22%2C%22locale%22%3A%22nl_NL%22%2C%22epoch%22%3A1529152469729%2C%22device%22%3A%7B%22ip%22%3A%2294.224.86.97%22%2C%22geoLocation%22%3A%7B%7D%2C%22isMobile%22%3Anull%2C%22name%22%3A%22%22%2C%22formFactor%22%3A%22%22%7D%2C%22id%22%3A%2230d9831b37a94db39682d854d90b7a31%22%2C%22isSecurityPrincipalForIdentity%22%3A%7B%22phone%22%3A%2200%20000%2000%2000%22%2C%22companyName%22%3Anull%2C%22displayName%22%3A%22Garage%20Pluss%22%2C%22companyEmail%22%3A%22pluss%40qualitygarage.be%22%2C%22email%22%3A%22info%40pluss.be%22%2C%22approvedEmail%22%3A%22pluss%40qualitygarage.be%22%2C%22id%22%3A%22b6b51b66d69c4ed6a4c014f4c214b33e%22%2C%22name%22%3A%22pluss%22%2C%22hasOfficeAddressGeoLocations%22%3A%5B%7B%22country%22%3Anull%2C%22street%22%3A%22Gevaertstraat%2023%22%2C%22zipCode%22%3A%221800%22%2C%22countryCode%22%3Anull%2C%22lat%22%3A50.937006%2C%22lon%22%3A4.434635%7D%5D%7D%7D; _lr_tabs_-ewbx3l%2Fqualitygarage-webapp={%22sessionID%22:0%2C%22recordingID%22:%222-ce857f73-2614-4789-9268-798c411817ea%22%2C%22lastActivity%22:1529253082938}; _lr_hb_-ewbx3l%2Fqualitygarage-webapp={%22heartbeat%22:1529254591878}' },
 *      }
 *      ctx.req.url: '/'
 *      ctx.req.baseUrl: ''
 *      ctx.req.originalUrl: '/'
 *      ctx.req.originalUrl: '/'
 *      ctx.req.params: {}
 *      ctx.req.query: {}
 *      ctx.req.query: {}
 *
 *      ctx.req.body: {}
 *      ctx.req.universalCookies: {
 *          cookies: {}
 *      }
 *      ctx.req.stats: {
 *          reqCount: 1
 *      }
 *      ctx.req.db: {
 *          cache: {},
 *          schema: {},
 *          graph: {},
 *      }
 *      ctx.req.CTX: {
 *          BASE_URL: 'http://localhost:3000',
 *          USER_ID: '70fd9f831cad4506a1076f956ffa2a0b',
 *          SESSION_ID: '309187fca04647209066bb77eb4f80ec',
 *          origin: 'http://localhost:3000',
 *          domain: 'localhost',
 *          eid: '101',
 *          sid: '1999',
 *          user: {}
 *          time: 1529258070485,
 *          metrics: {},
 *      }
 *      ctx.req.route: {
 *          path: '/',
 *          stack: [],
 *          methods: {},
 *      }
 *
 *      ctx.pathname: '/templates/package.core.ui/home',
 *      ctx.query: {
 *          url: '/',
 *           locale: 'nl_NL'
 *      },
 *      ctx.asPath: '/',
 *      ctx.store: {
 *          dispatch: [Function],
 *          subscribe: [Function: subscribe],
 *          getState: [Function: getState],
 *          replaceReducer: [Function: replaceReducer],
 *          [Symbol(observable)]: [Function: observable]
 *      }
 */
