import * as ActionTypes from './actions'

/**
 * Initial State db
 */
const user = {
    identity: '',
    secret: '',
    locale: 'en_GB',
    device: {
        ip: '0.0.0.0',
        geoLocation: {},
        isMobile: null,
        name: '',
        formFactor: ''
    },
    permissions: {
        db: {
            Vehicle: '1111',
            Identity: '1111',
            Appointment: '1111'
        },
        ui: {
            CalendarEventEditor: '0110'
        }
    }
}

const globalReducer = (state = user, action) => {

    switch (action.type) {
        case ActionTypes.SET_AUTHENTICATED_USER:
            return {
                ...state
            }

        default:
            return state
    }
}

export default globalReducer
