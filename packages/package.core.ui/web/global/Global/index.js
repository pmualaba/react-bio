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
import {useViewportScroll, useTransform} from 'framer-motion'
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
    const {scrollYProgress} = useViewportScroll()

    // scrollYProgress.onChange(e => console.log('scrollYProgress', e))

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
        const click$domElement$subscription = click$domElement$.subscribe(val => {
            // console.log('click', val)
        })

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
            // console.log('mouseover', val)
        })
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.WebFontConfig = {
                google: {families: props.dna.set.fonts.google}
            }
            ;(function() {
                const script = document.createElement('script')
                script.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js'
                script.type = 'text/javascript'
                script.async = 'true'
                const s = document.getElementsByTagName('script')[0]
                s.parentNode.insertBefore(script, s)
            })()
        }

        props.context.environment.IE &&
            typeof window !== 'undefined' &&
            window.cssVars({
                include: 'style',
                onlyLegacy: false,
                watch: true,
                onComplete(cssText, styleNode, cssVariables) {
                    console.log(cssText)
                }
            })
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
        theme: theme(currentSkinName, props.skins),
        fn: {
            sendNotification,
            clearNotification,
            setSkin
        }
    }

    console.log('RENDER GLOBAL', props)

    const page = {}
    const website = {templates: {}}

    const l = props.context.locale
    return (
        <GlobalContext.Provider value={context}>
            <Head>
                <meta name="description" content={page[`metaDescription_${l}`]} />
                <meta property="og:title" content={page[`metaTitle_${l}`]} />
                <meta property="og:description" content={page[`metaDescription_${l}`]} />
                <meta
                    property="og:image"
                    content={page.hasFeaturedImage && page.hasFeaturedImage.localUrl}
                />
                <title>
                    {website[`name_${l}`] || website.name} | {page[`metaTitle_${l}`]}
                </title>
                <link
                    rel="shortcut icon"
                    href={`/domains/${
                        context.environment.domain.host
                    }/package.core.cms/favicon.ico`}
                />
                {props.dna.set.fonts.script && <script src={props.dna.set.fonts.script} async />}
                {props.dna.set.fonts.link && (
                    <link rel="stylesheet" href={props.dna.set.fonts.link} />
                )}

                {props.context.environment.IE && (
                    <script
                        crossOrigin="anonymous"
                        src="https://polyfill.io/v3/polyfill.min.js?features=WeakSet%2CString.prototype.startsWith%2CObject.assign%2CArray.prototype.find"
                    />
                )}

                {props.context.environment.IE && (
                    <script src="https://cdn.jsdelivr.net/npm/css-vars-ponyfill@2.1.2/dist/css-vars-ponyfill.min.js" />
                )}
                <style>{CSSreset(props)}</style>
                <style>{CSSvariables(currentSkinName, props.skins)}</style>
            </Head>
            <ThemeProvider theme={theme(currentSkinName, props.skins)}>
                <GlobalStyled
                    meta={props.meta}
                    dna={props.dna}
                    context={context}
                    style={{
                        ...props.dna.ui['theme.decorate.style']
                    }}
                    animate={props.dna.ui['theme.skin.motion'].animate}
                    transition={props.dna.ui['theme.skin.motion'].transition}
                    initial={{opacity: 0}}
                    /*
                        as={
                            props.dna.ui['theme.skin.motion']
                            ? components.motion[props.dna.ui['theme.skin.motion'].tag]
                            : 'div'
                        }
                    */
                    as={
                        props.dna.ui['theme.skin.motion']
                            ? components.motion[props.dna.ui['theme.skin.motion'].tag]
                            : 'div'
                    }
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
