import {createLogic} from 'redux-logic'
import FSA, * as ActionTypes from './actions'
import * as cellActionTypes from './../../package.core.ui/app/cells/Cell/actions'

const onCellUpdate = createLogic({
    type: cellActionTypes.ON_CELL_UPDATE,
    latest: true,

    process({action, axios}, dispatch, done) {
        action.payload.updateMode !== 'SKIP_REALISTIC' && dispatch(FSA(ActionTypes.UPDATE_INSTANCE_OPTIMISTIC, false, action.payload))
        done()
    }
})

export default [onCellUpdate]
