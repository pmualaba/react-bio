import * as ActionTypes from './actions'

/**
 * Initial State db
 */
const global = {
    theme: 'default',
    environment: {
        node: process.env.NODE_ENV
    },
    router: {
        loadingPage: false,
        currentRoute: '/home'
    },
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
}

const globalReducer = (state = global, action) => {

    switch (action.type) {
        case ActionTypes.SET_CURRENT_ROUTE:
            return {
                ...state,
                router: {
                    ...state.router,
                    currentRoute: action.payload.url
                }
            }

        default:
            return state
    }
}

export default globalReducer
