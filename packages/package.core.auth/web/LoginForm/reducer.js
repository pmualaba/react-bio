import {combineReducers} from 'redux'

/**
 * Actions
 */

export const ON_KEY_UP = 'ON_KEY_UP'
export const ON_CELL_UPDATE = 'ON_CELL_UPDATE'
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER'
export const AUTHENTICATE_USER_SUCCESS = 'AUTHENTICATE_USER_SUCCESS'
export const AUTHENTICATE_USER_FAILED = 'AUTHENTICATE_USER_FAILED'
export const CANCEL_AUTHENTICATE_USER = 'CANCEL_AUTHENTICATE_USER'
export const UI_UPDATE_VALUE = 'UI_UPDATE_VALUE'
export const UI_INPUTVALIDATION_ERROR = 'UI_INPUTVALIDATION_ERROR'
export const FSA = (type, error = false, payload = {}, meta = {package: 'package.core.auth'}) => ({
    type,
    error,
    payload,
    meta: meta.package ? meta : {...meta, package: 'package.core.auth'}
})

/**
 * Initial State db
 */

export const db = {
    errors: {},
    user: {
        identity: '',
        secret: '',
        locale: 'en_GB',
        device: {
            ip: '0.0.0.0',
            geoLocation: {},
            isMobile: null,
            name: '',
            formFactor: ''
        }
    }
}

/**
 * Reducer db
 */

const dbReducer = (state = db, action) => {
    if (
        action.payload &&
        action.payload.data &&
        !(action.payload.data.selector.indexOf("ui['package.core.auth'].web.LoginForm.db") === 0)
    ) {
        console.log('FALSE')
        return state
    }

    switch (action.type) {
        case 'TEST_ACTION_1':
            return {
                ...state,
                user: {
                    ...state.user,
                    identity: action.payload
                }
            }

        case 'TEST_ACTION_2':
            return {
                ...state,
                errors: {
                    error: action.payload
                }
            }

        case ON_KEY_UP:
            const key = action.payload.data.selector.split('.').pop()
            return {
                ...state,
                user: {
                    ...state.user,
                    [key]: action.payload.data.value
                }
            }

        case AUTHENTICATE_USER:
            return {
                ...state,
                user: action.payload
            }

        case AUTHENTICATE_USER_SUCCESS:
            return {
                ...state,
                user: {...state.user, secret: '****************'}
            }

        case AUTHENTICATE_USER_FAILED:
            return {
                ...state,
                user: {...state.user, secret: '****************'}
            }

        default:
            return state
    }
}

/**
 * Initial State ui
 */

export const ui = {
    errors: {
        identity: {},
        secret: {},
        locale: {}
    },
    formFields: [
        {
            name: 'identity',
            label: 'Username',
            type: 'text',
            currentValue: '',
            valueList: []
        },
        {
            name: 'secret',
            label: 'Password',
            type: 'password',
            currentValue: '',
            valueList: []
        },
        {
            name: 'locale',
            label: 'Language',
            type: 'radio',
            currentValue: 'en_GB',
            valueList: [
                {
                    language: 'English',
                    value: 'en_GB',
                    locale: 'en_GB',
                    label: 'EN'
                },
                {
                    language: 'Nederlands',
                    value: 'nl_NL',
                    locale: 'nl_NL',
                    label: 'NL'
                },
                {
                    language: 'Français',
                    value: 'fr_FR',
                    locale: 'fr_FR',
                    label: 'FR'
                }
            ]
        }
    ]
}

/**
 * Reducer ui
 */

const uiReducer = (state = ui, action) => {
    if (
        action.payload &&
        action.payload.data &&
        !(action.payload.data.selector.indexOf("ui['package.core.auth'].web.LoginForm.ui") === 0)
    ) {
        return state
    }

    switch (action.type) {
        case UI_INPUTVALIDATION_ERROR:
            return {
                ...action.payload
            }

        case AUTHENTICATE_USER_FAILED:
            return {
                ...action.payload
            }

        case AUTHENTICATE_USER:
            return {}

        default:
            return state
    }
}

/**
 * Export Reducers
 */

export default combineReducers({
    db: dbReducer,
    ui: uiReducer
})
