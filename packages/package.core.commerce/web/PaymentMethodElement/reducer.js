import {combineReducers} from 'redux'

/**
 * Actions
 */

export const ON_KEY_UP = 'ON_KEY_UP'
export const ON_CELL_UPDATE = 'ON_CELL_UPDATE'
export const SEND_PAYMENT_STRIPE = 'SEND_PAYMENT_STRIPE'
/* prettier-ignore */
export const FSA = (type, error = false, payload = {}, meta = {package: 'package.core.commerce'}) =>
    ({type, error, payload, meta: meta.package ? meta : {...meta, package: 'package.core.commerce'}})

/**
 * Initial State db
 */

export const db = {}

/**
 * Reducer db
 */

const dbReducer = (state = db, action) => {
    if (
        action.payload &&
        action.payload.data &&
        !(
            action.payload.data.selector.indexOf(
                "ui['package.core.commerce'].web.PaymentStripeElement.db"
            ) === 0
        )
    ) {
        return state
    }

    switch (action.type) {
        case SEND_PAYMENT_STRIPE:
            return {
                ...state
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

        default:
            return state
    }
}

/**
 * Initial State ui
 */

export const ui = {}

/**
 * Reducer ui
 */

const uiReducer = (state = ui, action) => {
    if (
        action.payload &&
        action.payload.data &&
        !(
            action.payload.data.selector.indexOf(
                "ui['package.core.commerce'].web.PaymentStripeElement.ui"
            ) === 0
        )
    ) {
        return state
    }

    switch (action.type) {
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
