import React from 'react'
import {connect} from 'react-redux'

import Document from './index'
import FSA, * as ActionTypes from './actions'

const mapState = (state, props) => ({
    global: state.global,
    globalDna: state.dna,
    user: state.global.user,
    currentRoute: state.global.router.currentRoute,
    children: props.children
})

const actions = {
    setUserAuthenticationData: payload => FSA(ActionTypes.SET_USER_AUTHENTICATION_DATA, false, payload),
    onRouteChange: url => FSA(ActionTypes.SET_CURRENT_ROUTE, false, {url}),
    sendNotification: payload => FSA(ActionTypes.SEND_NOTIFICATION, false, payload),
    clearNotification: payload => FSA(ActionTypes.CLEAR_NOTIFICATION, false, payload),
    onComponentHook: hook => FSA(ActionTypes.ON_COMPONENT_HOOK, false, {hook})
}

export default connect(
    mapState,
    actions
)(Document)
