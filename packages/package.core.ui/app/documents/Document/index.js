import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import Cookies from 'universal-cookie'

import {fromEvent} from 'rxjs'
import {auditTime, map, pairwise} from 'rxjs/operators'
import {get} from 'lodash'

import styled, {ThemeProvider} from 'styled-components'
import theme from '../../../../../theme/app/theme'
import CSSglobalReset from '../../../../../theme/app/css-global-reset'
import CSSglobalStyling from '../../../../../theme/app/css-global-styling'
import CSSglobalVariablesHOC from '../../../../../theme/app/css-global-variables'

import {CTXprovideGlobal} from './context'
import HtmlHead from './HtmlHead'
import Layer from './Layer'

const DocumentStyled = styled.div.attrs(props => ({
    at: `${props.meta['@dna']}`,
    component: `${props.meta.class}`
}))`
    ${props => {
        console.log('DocumentStyled props.theme', props.theme)
        console.log('DocumentStyled props.meta', props.meta)
        console.log('DocumentStyled props.ui', props.ui)
        console.log('DocumentStyled props', get(props.theme.design, props.meta['@theme']))
        return get(props.theme.design, props.meta['@theme'])(props)
    }};
    height: ${props => props.styling.height || (props.viewport === 'viewport' ? '100vh' : '100%')};
    width: ${props => props.styling.width || (props.viewport === 'viewport' ? '100vw' : '100%')};
    overflow: ${props => (props.viewport === 'viewport' ? 'hidden' : 'scroll')};
`

class Document extends React.Component {
    state = {}

    CSSglobalVariables = CSSglobalVariablesHOC(this.props.global.theme)

    componentWillMount() {
        console.log('APP Global componentWillMount()', this.props.global)
    }

    componentDidMount() {
        /**
         * Theme Transition Demo
         */

        setTimeout(function() {
            console.log('CDM app Document')
        }, 3000)

        console.log('Global componentDidMount()')

        /**
         * Setup Event Bus
         */

        const click$ = fromEvent(document, 'click')
        const click$domElement$ = click$.pipe(map(event => event.target))
        const click$domElement$subscription = click$domElement$.subscribe(val => console.log('click', val))

        const mouseOver$ = fromEvent(document, 'mouseover')
        const mouseOver$domElement$ = mouseOver$.pipe(
            map(event => {
                if (event.target.classList.contains('input')) {
                    event.preventDefault()
                } else {
                    //event.target.props = this.props
                    return event.target
                }
            }),
            auditTime(100),
            pairwise()
        )
        const mouseOver$eventTarget$subscription = mouseOver$domElement$.subscribe(val => {
            console.log('mouseover', val)
            //console.log(val.props)
        })

        /*
        const mouseOut$ = fromEvent(document, 'pointerout')
        const mouseOut$eventTarget$ = mouseOver$.pipe(
            map(event => {
                if (event.target.classList.contains('input')) {
                    event.preventDefault()
                } else {
                    //event.target.props = this.props
                    return event.target
                }
            })
        )
        const mouseOut$eventTarget$subscribe = mouseOut$eventTarget$.subscribe(val => {
            console.log('mouseout', val)
            //console.log(val.props)
        })*/

        /**
         * Authentication
         */
        const user = new Cookies().get('_user') || null
        this.props.setUserAuthenticationData({user})
        this.props.onComponentHook({
            name: 'pageLoad',
            address: 'package.core.global/app/components/Global/index.js/componentDidMount',
            description: 'When a user refreshes or loads a page',
            payload: {url: window.location.pathname}
        })

        /**
         * Next.js Router Lifecycle Hooks
         */
        Router.onRouteChangeStart = url => {
            console.log('Router.onRouteChangeStart', url)
        }
        Router.onRouteChangeComplete = url => {
            console.log('Router.onRouteChangeComplete', url)
        }
    }

    render() {
        console.log('Document render()', this.props)
        const CSSglobalVariables = this.CSSglobalVariables
        const at = this.props.dna.meta
        return (
            <ThemeProvider theme={theme}>
                <CTXprovideGlobal
                    value={{
                        ...this.props.global,
                        sendNotification: this.props.sendNotification,
                        clearNotification: this.props.clearNotification
                    }}
                >
                    <HtmlHead />
                    <CSSglobalReset />
                    <CSSglobalStyling />
                    <CSSglobalVariables />

                    <DocumentStyled meta={at} dna={this.props.dna}>
                        <Layer id="layout">{this.props.children}</Layer>
                        <Layer id="modal" modals={{}} />
                        <Layer id="notification" notifications={{}} />
                        <Layer id="dom" />
                    </DocumentStyled>
                </CTXprovideGlobal>
            </ThemeProvider>
        )
    }
}

Document.propTypes = {
    global: PropTypes.objectOf(PropTypes.any),
    currentRoute: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,

    setUserAuthenticationData: PropTypes.func.isRequired,
    onComponentHook: PropTypes.func.isRequired,
    onRouteChange: PropTypes.func.isRequired,
    sendNotification: PropTypes.func.isRequired,
    clearNotification: PropTypes.func.isRequired
}

export default Document
