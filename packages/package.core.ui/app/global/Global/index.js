/**
 *  Dependencies
 */
import React, {createContext, useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {fromEvent} from 'rxjs'
import {auditTime, map, pairwise} from 'rxjs/operators'
import Router from 'next/router'
import Head from 'next/head'
import {ThemeProvider} from 'styled-components'
import FSA, * as ActionTypes from '../../../../package.core.global/web/actions'
import theme from '../../../../../dna/rna/registry.theme.web'
import {CSSvariables} from '../../../../package.core.fn/theme'
import CSSreset from '../../../../../theme/web/css-reset'
import components from '../../../../../dna/rna/registry.components.web'

/**
 * Components
 */

import GlobalStyled from './styled'

/**
 * Context
 */

export const GlobalContext = createContext({})
GlobalContext.displayName = 'GlobalContext'

/**
 * Component
 */

function Global(props) {
    /**
     * Hooks
     */

    useEffect(() => {
        /**
         * Next.js Router Lifecycle Hooks
         */

        Router.onRouteChangeStart = url => {
            console.log('Router.onRouteChangeStart', url)
        }
        Router.onRouteChangeComplete = url => {
            console.log('Router.onRouteChangeComplete', url)
        }

        /**
         * Setup Global Event Bus
         */

        const click$ = fromEvent(document, 'click')
        const click$domElement$ = click$.pipe(map(event => event.target))
        const click$domElement$subscription = click$domElement$.subscribe(val =>
            console.log('click', val)
        )

        const mouseOver$ = fromEvent(document, 'mouseover')
        const mouseOver$domElement$ = mouseOver$.pipe(
            map(event => {
                if (event.target.classList.contains('input')) {
                    event.preventDefault()
                } else {
                    // event.target.props = props
                    return event.target
                }
            }),
            auditTime(100),
            pairwise()
        )
        const mouseOver$eventTarget$subscription = mouseOver$domElement$.subscribe(val => {
            console.log('mouseover', val)
        })
    }, [])

    useEffect(() => {
        setTimeout(() => {
            // props.dispatch(FSA(ActionTypes.SET_CURRENT_SKIN, false, {skin: 'themeDefault'}))
        }, 3000)
    }, [])

    /**
     * Methods
     */

    function sendNotification(payload) {
        props.dispatch(FSA(ActionTypes.SEND_NOTIFICATION, false, payload))
    }

    function clearNotification(payload) {
        props.dispatch(FSA(ActionTypes.CLEAR_NOTIFICATION, false, payload))
    }

    function setSkin(payload) {
        const root = document.querySelector(':root')
        Object.entries(props.skins[payload.skin]).forEach(([themeVariantName, themeVariant]) => {
            themeVariant &&
                Object.entries(themeVariant).forEach(([dimensionName, dimension]) => {
                    dimension &&
                        dimensionName !== 'id' &&
                        dimensionName !== 'name' &&
                        dimensionName !== 'inherits' &&
                        Object.entries(dimension).forEach(
                            ([dimensionVariantName, dimensionVariant]) => {
                                dimensionVariant &&
                                    Object.entries(dimensionVariant).forEach(
                                        ([variable, value]) => {
                                            root.style.setProperty(
                                                `--${themeVariantName}-${dimensionName}-${dimensionVariantName}-${variable}`,
                                                value
                                            )
                                        }
                                    )
                            }
                        )
                })
        })
        props.dispatch(FSA(ActionTypes.SET_CURRENT_SKIN, false, payload))
    }

    /**
     * Render
     */

    const currentSkinName =
        props.global.currentSkin || props.context.web.currentSkin || props.dna.set.defaultSkin

    const context = {
        ...props.context,
        global: {...props.global, currentSkinName},
        fn: {
            sendNotification,
            clearNotification,
            setSkin
        }
    }

    console.log('RENDER GLOBAL')
    return (
        <GlobalContext.Provider value={context}>
            <Head>
                <style>{CSSreset}</style>
                <style>{CSSvariables(currentSkinName, props.skins)}</style>
            </Head>
            <ThemeProvider theme={theme(currentSkinName, props.skins)}>
                <GlobalStyled
                    meta={props.meta}
                    dna={props.dna}
                    device={props.context.device}
                    context={context}
                    own={{...props.global}}
                    as={
                        props.dna.ui['theme.skin.motion']
                            ? components.motion[props.dna.ui['theme.skin.motion'].as]
                            : 'div'
                    }
                    animate={{scale: 0.5}}
                >
                    {props.children}
                </GlobalStyled>
            </ThemeProvider>
        </GlobalContext.Provider>
    )
}

Global.propTypes = {
    meta: PropTypes.object,
    dna: PropTypes.object,
    global: PropTypes.object,
    skins: PropTypes.object
}

const mapState = (state, props) => ({
    global: state.global.web
})

export default connect(mapState)(Global)
