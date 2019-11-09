import { combineReducers } from 'redux'
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
 * Reducers db
 */
const dbReducer = (state = db, action) => {
    switch (action.type) {
        case ActionTypes.AUTHENTICATE_USER:
            return {
                ...state,
                user: action.payload
            }

        case ActionTypes.AUTHENTICATE_USER_SUCCESS:
            return {
                ...state,
                user: { ...state.user, secret: '****************' }
            }

        case ActionTypes.AUTHENTICATE_USER_FAILED:
            return {
                ...state,
                user: { ...state.user, secret: '****************' }
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
 * Reducers ui
 */
const uiErrorsReducer = (errors = ui.errors, action) => {
    const clearUiErrors = {}
    Object.keys(errors).forEach(key => {
        clearUiErrors[key] = {}
    })

    switch (action.type) {
        case ActionTypes.UI_INPUTVALIDATION_ERROR:
            return {
                ...clearUiErrors,
                ...action.payload
            }

        case ActionTypes.AUTHENTICATE_USER_FAILED:
            return {
                ...clearUiErrors,
                ...action.payload
            }

        case ActionTypes.AUTHENTICATE_USER:
            return {
                ...clearUiErrors
            }

        default:
            return errors
    }
}

const uiFormFieldReducer = (formField, action) => {
    switch (action.type) {
        case ActionTypes.UI_UPDATE_VALUE:
            return {
                ...formField,
                currentValue: action.payload.currentValue
            }

        default:
            return formField
    }
}

const uiFormFieldsReducer = (formFields = ui.formFields, action) => {
    switch (action.type) {
        case ActionTypes.UI_UPDATE_VALUE:
            return formFields.map(
                formField => (formField.name !== action.payload.uiTarget ? formField : uiFormFieldReducer(formField, action))
            )

        case ActionTypes.AUTHENTICATE_USER_FAILED:
            return formFields.map((formField, index) => (index !== 1 ? formField : { ...formField, currentValue: '' }))

        default:
            return formFields
    }
}

/**
 * Export Reducers
 */
const uiReducer = combineReducers({
    errors: uiErrorsReducer,
    formFields: uiFormFieldsReducer
})

export default combineReducers({
    db: dbReducer,
    ui: uiReducer
})
