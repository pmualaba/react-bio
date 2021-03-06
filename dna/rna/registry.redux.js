import {combineReducers} from 'redux'
/**
 * Import Root Reducers
 */
import {rootReducer as globalRootReducer} from '../../packages/package.core.global/redux'
import db from '../../packages/package.core.data/web/reducer'
import io from '../../packages/package.core.io/io/reducer'

import {rootReducer as loginRootReducer} from '../../packages/package.core.auth/redux'

/**
 * Import Root Logic
 */
import {rootLogic as globalRootLogic} from '../../packages/package.core.global/redux'
import dbLogic from '../../packages/package.core.data/web/logic'
import ioLogic from '../../packages/package.core.io/io/logic'

import {rootLogic as loginRootLogic} from '../../packages/package.core.auth/redux'

/**
 * Root Reducer Composition
 */
export const rootReducer = combineReducers({
    global: globalRootReducer,
    db,
    io,
    ui: combineReducers({
        'package.core.auth': loginRootReducer
    })
})

/**
 * Root Logic Composition
 */
export const rootLogic = [...globalRootLogic, ...dbLogic, ...ioLogic, ...loginRootLogic]
