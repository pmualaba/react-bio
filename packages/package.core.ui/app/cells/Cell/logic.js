import {createLogic} from 'redux-logic'
import FSA, * as ActionTypes from './actions'
import * as dbActionTypes from './../../../../package.core.db/db/actions'

const onCellUpdate = createLogic({
    type: ActionTypes.ON_CELL_UPDATE,
    latest: true,

    process({action, axios}, dispatch, done) {
        dispatch(FSA(dbActionTypes.UPDATE_INSTANCE_OPTIMISTIC, false, action.payload))
        done()
    }
})

export default [onCellUpdate]
