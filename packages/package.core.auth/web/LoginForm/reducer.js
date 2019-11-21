import {combineReducers} from 'redux'
import * as ActionTypes from './actions'

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
    switch (action.type) {
        case 'ON_RESET':
            return {
                ...state,
                user: {
                    ...state.user,
                    identity: action.payload
                }
            }

        case ActionTypes.AUTHENTICATE_USER:
            return {
                ...state,
                user: action.payload
            }

        case ActionTypes.AUTHENTICATE_USER_SUCCESS:
            return {
                ...state,
                user: {...state.user, secret: '****************'}
            }

        case ActionTypes.AUTHENTICATE_USER_FAILED:
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
    switch (action.type) {
        case ActionTypes.UI_INPUTVALIDATION_ERROR:
            return {
                ...action.payload
            }

        case ActionTypes.AUTHENTICATE_USER_FAILED:
            return {
                ...action.payload
            }

        case ActionTypes.AUTHENTICATE_USER:
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
