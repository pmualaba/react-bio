import {combineReducers} from 'redux'

/**
 * Import Logic
 */
import loginFormLogic from './web/LoginForm/logic'

/**
 * Import Reducers
 */
import LoginForm from './web/LoginForm/reducer'

/**
 * Reducer Composition
 */
export const rootReducer = combineReducers({
    web: combineReducers({
        LoginForm
    })
})
/**
 * Logic Composition
 */
export const rootLogic = [...loginFormLogic]
