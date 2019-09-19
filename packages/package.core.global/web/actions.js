/**
 * ************
 * Action Types
 * ************
 */

/**
 * GLOBAL ACTIONS
 */
export const SET_CURRENT_ROUTE = 'package.core.global/web/Global/SET_CURRENT_ROUTE'
export const SET_AUTHENTICATED_USER = 'package.core.global/web/Global/SET_AUTHENTICATED_USER'
export const SET_CURRENT_SKIN = 'package.core.global/web/Global/SET_CURRENT_SKIN'

export const LOAD_LOCAL_STORE = 'package.core.global/web/Global/LOAD_LOCAL_STORE'
export const PREFETCH_SELECTIONS = 'package.core.global/web/Global/PREFETCH_SELECTIONS'

export const SEND_NOTIFICATION = 'package.core.global/web/Global/SEND_NOTIFICATION'
export const CLEAR_NOTIFICATION = 'package.core.global/web/Global/CLEAR_NOTIFICATION'
export const ON_COMPONENT_HOOK = 'package.core.global/web/Global/ON_COMPONENT_HOOK'

/**
 * FSA
 * Flux Standard Action Creator
 */
export default (type, error = false, payload = {}, meta = {package: 'package.core.global/web'}) => ({type, error, payload, meta})
