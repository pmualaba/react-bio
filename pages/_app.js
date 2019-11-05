/**
 * Dependencies
 */
import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import withRedux from 'next-redux-wrapper'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension' // import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'

import {createLogicMiddleware} from 'redux-logic'
import API from '../packages/package.core.fn/api'
import {rootLogic, rootReducer} from '../dna/rna/registry.redux'

const deps = {
    API
}

/**
 * Components
 */

/**
 * App
 */
export default withRedux(
    (initialState = {}) => {
        const composedEnhancer = composeWithDevTools(
            applyMiddleware(createLogicMiddleware(rootLogic, deps))
        )
        return createStore(rootReducer, initialState, composedEnhancer)
    },
    {debug: false}
)(
    class WebApp extends App {
        state = {
            renderCycle: 0
        }

        detectScreenSize(renderCycle) {
            const device = {
                isMobile: false,
                isLandscape: window.innerHeight < window.innerWidth,
                formFactor: '',
                screenSize: '',
                vh: window.innerHeight,
                vw: window.innerWidth,
                bh: window.document.body.offsetHeight
            }

            if (renderCycle === 0) {
                return device
            }

            if (Modernizr.mq('(max-width: 639px)')) {
                device.isMobile = true
                device.formFactor = 'phone'
                device.screenSize = 'S'
                device.fontSize = '1.6rem'
            } else if (Modernizr.mq('(max-width: 991px)')) {
                device.isMobile = true
                device.formFactor = 'tablet'
                device.screenSize = 'M'
                device.fontSize = '1.8rem'
            } else if (Modernizr.mq('(min-width: 1800px)')) {
                device.isMobile = false
                device.formFactor = 'desktopXXL'
                device.screenSize = 'XXL'
                device.fontSize = '3.0rem'
            } else if (Modernizr.mq('(min-width: 1300px)')) {
                device.isMobile = false
                device.formFactor = 'desktopXL'
                device.screenSize = 'XL'
                device.fontSize = '2.2rem'
            } else {
                device.isMobile = false
                device.formFactor = 'desktop'
                device.screenSize = 'L'
                device.fontSize = '2.0rem'
            }

            return device
        }
        componentDidMount() {
            /**
             * Detect FormFactor
             */

            this.setState(state => ({renderCycle: state.renderCycle + 1}))

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
            const isBrowser = typeof window !== 'undefined'

            const context = {
                renderCycle: this.state.renderCycle,
                device:
                    typeof window !== 'undefined' && this.detectScreenSize(this.state.renderCycle),
                usr: (isBrowser && JSON.parse(localStorage.getItem('usr'))) || {},
                app: (isBrowser && JSON.parse(localStorage.getItem('app'))) || {},
                web: (isBrowser && JSON.parse(localStorage.getItem('web'))) || {}
            }

            return (
                <Provider store={store}>
                    <Head>
                        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                        <meta charSet="utf-8" />
                        <script src="/js/modernizr-custom.js" />
                        {false && (
                            <script
                                src="//cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.23.0/polyfill.min.js"
                                crossOrigin="anonymous"
                            />
                        )}
                    </Head>
                    <Component {...pageProps} context={context} />
                </Provider>
            )
        }
    }
)
