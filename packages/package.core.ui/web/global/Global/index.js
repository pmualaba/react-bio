/**
 *  Dependencies
 */
import React, {createContext, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fromEvent} from 'rxjs'
import {auditTime, map, pairwise} from 'rxjs/operators'
import Router from 'next/router'
import Head from 'next/head'
import {useViewportScroll, useTransform} from 'framer-motion'
import FSA, * as ActionTypes from '../../../../package.core.global/web/actions'
import Theme from '../../../../../dna/rna/registry.design.web'
import {CSSvariables, getGoogleFonts} from '../../../../package.core.fn/theme'
import {storeEquality} from '../../../../package.core.fn/data'
import CSSreset from '../../../../../design/web/css-reset'

import components from '../../../../../dna/rna/registry.components.web'
import BackgroundElement from '../../elements/BackgroundElement'
import GlobalStyled from './styled'

/**
 * Context
 */

export const GlobalContext = createContext({})
GlobalContext.displayName = 'GlobalContext'

export default function Global(props) {
    /**
     * Data
     */

    const store = useSelector(store => ({global: store.global.web}), storeEquality)
    const dispatchStore = useDispatch()

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

        const click$ = fromEvent(window.document, 'click')
        const click$domElement$ = click$.pipe(map(event => event.target))
        const click$domElement$subscription = click$domElement$.subscribe(val => {
            // console.log('click', val)
        })

        const mouseOver$ = fromEvent(window.document, 'mouseover')
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
        getGoogleFonts({families: props.dna.set.fonts.google})

        props.context.environment.browser.IE &&
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
            // dispatchStore(FSA(ActionTypes.SET_CURRENT_SKIN, false, {skin: 'themeDefault'}))
        }, 3000)
    }, [])

    useEffect(() => {
        /* eslint-disable */
        const {scrollYProgress} = useViewportScroll()
        /* eslint-enable */
        return scrollYProgress.onChange(e => {
            props.context.device.vs = e
        })
    })

    /**
     * Methods
     */

    function sendNotification(payload) {
        dispatchStore(FSA(ActionTypes.SEND_NOTIFICATION, false, payload))
    }

    function clearNotification(payload) {
        dispatchStore(FSA(ActionTypes.CLEAR_NOTIFICATION, false, payload))
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
        dispatchStore(FSA(ActionTypes.SET_CURRENT_SKIN, false, payload))
    }

    /**
     * Render
     */

    const currentSkinName =
        store.global.currentSkin || props.context.web.currentSkin || props.dna.set.defaultSkin

    const theme = Theme(currentSkinName, props.skins)

    const context = {
        ...props.context,
        global: {...store.global, currentSkinName},
        theme,
        fn: {
            sendNotification,
            clearNotification,
            setSkin
        }
    }

    const document = props.data.init.document
    const domain = props.context.environment.domain
    const l = props.context.environment.locale
    const {css, motion} = context.theme.render(props, context)

    /**
     * BackgroundElement__global
     */
    const bio = {}
    bio.BackgroundElement__global = {
        meta: {
            '@dna': `${props.meta['@dna']}.elements[0:BackgroundElement__global]`,
            '@component': "['package.core.ui'].web.elements.BackgroundElement",
            name: 'BackgroundElement__global',
            class: 'BackgroundElement',
            kind: 'element'
        },
        data: {
            init: {
                backgrounds: [{url: '/domains/my-react-bio-app.org/package.core.cms/img/bio.jpg'}]
            }
        },
        dna: {
            set: {
                rotate: 180
            },
            ui: {
                'theme.motion.variant': 'login',
                'theme.style.css': {
                    transform: 'rotate(180deg)'
                }
            }
        },
        context
    }

    console.log('RENDER GLOBAL')
    return (
        <GlobalContext.Provider value={context}>
            <Head>
                <meta name="description" content={document[`metaDescription_${l}`]} />
                <meta property="og:title" content={document[`metaTitle_${l}`]} />
                <meta property="og:description" content={document[`metaDescription_${l}`]} />
                <meta
                    property="og:image"
                    content={document.hasFeaturedImage && document.hasFeaturedImage.localUrl}
                />
                <title>
                    {domain[`title_${l}`] || domain.title || domain.name} |{' '}
                    {document[`metaTitle_${l}`]}
                </title>

                <link
                    rel="shortcut icon"
                    href={`/domains/${context.environment.domain.host}/package.core.cms/favicon.ico`}
                />
                {props.dna.set.fonts.script && <script src={props.dna.set.fonts.script} async />}
                {props.dna.set.fonts.link && (
                    <link rel="stylesheet" href={props.dna.set.fonts.link} />
                )}

                {props.context.environment.browser.IE && (
                    <script
                        crossOrigin="anonymous"
                        src="https://polyfill.io/v3/polyfill.min.js?features=WeakSet%2CString.prototype.startsWith%2CObject.assign%2CArray.prototype.find"
                    />
                )}

                {props.context.environment.browser.IE && (
                    <script src="https://cdn.jsdelivr.net/npm/css-vars-ponyfill@2.1.2/dist/css-vars-ponyfill.min.js" />
                )}
                <style>{CSSreset(props)}</style>
                <style>{CSSvariables(currentSkinName, props.skins)}</style>
            </Head>

            <GlobalStyled
                meta={props.meta}
                dna={props.dna}
                context={context}
                css={css}
                {...motion}
                style={props.dna.ui['theme.style.css']}
            >
                <BackgroundElement {...bio.BackgroundElement__global} />
                {props.children}
            </GlobalStyled>
        </GlobalContext.Provider>
    )
}

/**
 * <div
 style={{
                    filter: 'blur(30px)',
                    position: 'absolute',
                    height: '100vh',
                    width: '100vw',
                    backgroundImage:
                        'url(/domains/my-react-bio-app.org/package.core.cms/img/bio.jpg)'
                }}
 ></div>
 */
