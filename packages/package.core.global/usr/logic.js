/* eslint-disable no-eval */
import {createLogic} from 'redux-logic'
import FSA, * as ActionTypes from './actions'

const loadLocalStore = createLogic({
    type: ActionTypes.LOAD_LOCAL_STORE,
    latest: true,

    process({action, axios}, dispatch, done) {
        localStorage.getItem('global')
    }
})

export default [loadLocalStore]
