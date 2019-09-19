import {createLogic} from 'redux-logic'
import FSA, * as ActionTypes from './actions'
import * as cellActionTypes from './../../package.core.ui/app/cells/Cell/actions'
const env = require('../../../env.client')()

const getInstancesByType = createLogic({
    type: ActionTypes.GET_INSTANCES_BY_TYPE,
    latest: true,

    process({action, axios}, dispatch, done) {
        console.log('CustomerList/logic/get_customers/axios')
        axios
            .post(
                `${env.BASE_URL}/api/crm/admin`,
                {
                    type: 'GET_PERSONS',
                    payload: {},
                    error: false,
                    meta: {package: 'package.core.crm'}
                },
                {
                    headers: {
                        Accept: 'application/json; charset=utf-8',
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then(res => res.data)
            .then(response => {
                dispatch(FSA(ActionTypes.GET_INSTANCES_BY_TYPE_SUCCESS, false, {customers: response.payload.customers}))
                done()
            })
            .catch(error => {
                console.log(error)
                dispatch(FSA(ActionTypes.GET_INSTANCES_BY_TYPE_FAILED, true, error))
                done()
            })
    }
})

const onCellUpdate = createLogic({
    type: cellActionTypes.ON_CELL_UPDATE,
    latest: true,

    process({action, axios}, dispatch, done) {
        action.payload.updateMode !== 'SKIP_REALISTIC' && dispatch(FSA(ActionTypes.UPDATE_INSTANCE_OPTIMISTIC, false, action.payload))
        done()
    }
})

export default [getInstancesByType, onCellUpdate]
