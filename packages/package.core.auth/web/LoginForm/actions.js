/**
 * ************
 * Action Types
 * ************
 */

/**
 * Authentication
 */
export const AUTHENTICATE_USER = 'package.core.authentication/LoginForm/AUTHENTICATE_USER'
export const AUTHENTICATE_USER_SUCCESS = 'package.core.authentication/LoginForm/AUTHENTICATE_USER_SUCCESS'
export const AUTHENTICATE_USER_FAILED = 'package.core.authentication/LoginForm/AUTHENTICATE_USER_FAILED'
export const CANCEL_AUTHENTICATE_USER = 'package.core.authentication/LoginForm/CANCEL_AUTHENTICATE_USER'

/**
 * Update Login Form "Username" and "Password" Input Fields
 */
export const UI_UPDATE_VALUE = 'package.core.authentication/LoginForm/UI_UPDATE_VALUE'
export const UI_INPUTVALIDATION_ERROR = 'package.core.authentication/LoginForm/UI_INPUTVALIDATION_ERROR'

/**
 * ***************
 * Action Creators
 * ***************
 */

/**
 * FSA
 * Flux Standard Action Creator
 */
const FSA = (type, error = false, payload = {}, meta = { package: 'package.core.authentication' }) => ({ type, error, payload, meta })
export default FSA
