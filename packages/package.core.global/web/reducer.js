import * as ActionTypes from './actions'

/**
 * Initial State db
 */
const global = {
    currentSkinName: '',
    router: {
        loadingPage: false,
        currentRoute: '/home'
    }
}

const globalReducer = (state = global, action) => {
    console.log('ACTION', action)

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
                currentSkinName: action.payload.skin
            }

        default:
            return state
    }
}

export default globalReducer
