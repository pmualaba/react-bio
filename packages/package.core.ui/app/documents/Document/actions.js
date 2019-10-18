/**
 * ************
 * Action Types
 * ************
 */

/**
 * GLOBAL ACTIONS
 */
export const SET_INITIAL_ROUTE = 'package.core.web.ui/Global/SET_INITIAL_ROUTE'
export const SET_CURRENT_ROUTE = 'package.core.web.ui/Global/SET_CURRENT_ROUTE'
export const SET_USER_AUTHENTICATION_DATA = 'package.core.web.ui/Global/SET_USER_AUTHENTICATION_DATA'

export const UI_INPUTVALIDATION_ERROR = 'package.core.web.ui/Global/UI_INPUTVALIDATION_ERROR'
export const PREFETCH_SELECTIONS = 'package.core.web.ui/Global/PREFETCH_SELECTIONS'
export const PREFETCH_SELECTIONS_SUCCESS = 'package.core.web.ui/Global/PREFETCH_SELECTIONS_SUCCESS'
export const PREFETCH_SELECTIONS_FAILED = 'package.core.web.ui/Global/PREFETCH_SELECTIONS_FAILED'
export const SEND_NOTIFICATION = 'package.core.web.ui/Global/SEND_NOTIFICATION'
export const CLEAR_NOTIFICATION = 'package.core.web.ui/Global/CLEAR_NOTIFICATION'
export const CLEAR_NOTIFICATIONS = 'package.core.web.ui/Global/CLEAR_NOTIFICATIONS'
export const ON_COMPONENT_HOOK = 'package.core.web.ui/Global/ON_COMPONENT_HOOK'

/**
 * FSA
 * Flux Standard Action Creator
 */
export default (type, error = false, payload = {}, meta = {package: 'package.core.web.ui'}) => ({type, error, payload, meta})
