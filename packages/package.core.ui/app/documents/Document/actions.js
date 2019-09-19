/**
 * ************
 * Action Types
 * ************
 */

/**
 * GLOBAL ACTIONS
 */
export const SET_INITIAL_ROUTE = 'package.core.app.ui/Global/SET_INITIAL_ROUTE'
export const SET_CURRENT_ROUTE = 'package.core.app.ui/Global/SET_CURRENT_ROUTE'
export const SET_USER_AUTHENTICATION_DATA = 'package.core.app.ui/Global/SET_USER_AUTHENTICATION_DATA'

export const UI_INPUTVALIDATION_ERROR = 'package.core.app.ui/Global/UI_INPUTVALIDATION_ERROR'
export const PREFETCH_SELECTIONS = 'package.core.app.ui/Global/PREFETCH_SELECTIONS'
export const PREFETCH_SELECTIONS_SUCCESS = 'package.core.app.ui/Global/PREFETCH_SELECTIONS_SUCCESS'
export const PREFETCH_SELECTIONS_FAILED = 'package.core.app.ui/Global/PREFETCH_SELECTIONS_FAILED'
export const SEND_NOTIFICATION = 'package.core.app.ui/Global/SEND_NOTIFICATION'
export const CLEAR_NOTIFICATION = 'package.core.app.ui/Global/CLEAR_NOTIFICATION'
export const CLEAR_NOTIFICATIONS = 'package.core.app.ui/Global/CLEAR_NOTIFICATIONS'
export const ON_COMPONENT_HOOK = 'package.core.app.ui/Global/ON_COMPONENT_HOOK'

/**
 * FSA
 * Flux Standard Action Creator
 */
export default (type, error = false, payload = {}, meta = {package: 'package.core.app.ui'}) => ({type, error, payload, meta})
