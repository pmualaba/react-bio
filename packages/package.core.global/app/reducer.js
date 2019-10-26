import * as ActionTypes from './actions'

/**
 * Initial State db
 */
const global = {
    currentSkin: '',
    router: {
        loadingPage: false,
        currentRoute: '/home'
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

        case ActionTypes.SET_CURRENT_SKIN:
            return {
                ...state,
                currentSkin: action.payload.skin
            }

        default:
            return state
    }
}

export default globalReducer
