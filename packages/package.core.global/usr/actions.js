/**
 * ************
 * Action Types
 * ************
 */

/**
 * GLOBAL ACTIONS
 */
export const SET_AUTHENTICATED_USER = 'package.core.global/usr/Global/SET_AUTHENTICATED_USER'

export const LOAD_LOCAL_STORE = 'package.core.global/usr/Global/LOAD_LOCAL_STORE'
export const PREFETCH_SELECTIONS = 'package.core.global/usr/Global/PREFETCH_SELECTIONS'

/**
 * FSA
 * Flux Standard Action Creator
 */
export default (type, error = false, payload = {}, meta = {package: 'package.core.global'}) => ({type, error, payload, meta})
