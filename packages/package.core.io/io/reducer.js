import {combineReducers} from 'redux'
import * as ActionTypes from './actions'

/**
 * Initial State db
 */

const notifications = {
    address: {
        'Cell.GridTable.PersonList.body.r11.c0': []
    },
    inbox: {
        ['global:test']: [
            {
                from: null,
                to: null,
                message: {
                    title: '',
                    body: ''
                },
                notificationType: null,
                cleared: false,
                position: null
            }
        ]
    },
    files: {}
}

/**
 * Reducers io
 */
const notificationReducer = (state = notifications, action) => {
    switch (action.type) {
        case ActionTypes.ON_SEND_NOTIFICATION:

        default:
            return state
    }
}

/**
 * Export Reducers
 */
export default combineReducers({
    notifications: notificationReducer
})
