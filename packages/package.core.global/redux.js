import {combineReducers} from 'redux'

/**
 * Import Logic
 */
import globalLogic from './app/logic'
import globalLogicWeb from './web/logic'

/**
 * Import Reducers
 */
import globalApp from './app/reducer'
import globalWeb from './web/reducer'
import globalUsr from './usr/reducer'

/**
 * Reducer Composition
 */
export const rootReducer = combineReducers({
    app: globalApp,
    web: globalWeb,
    usr: globalUsr
})
/**
 * Logic Composition
 */
export const rootLogic = [...globalLogic, ...globalLogicWeb]
