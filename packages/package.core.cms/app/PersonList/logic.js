import {createLogic} from 'redux-logic'
import FSA, * as ActionTypes from './actions'
const env = require('../../../../env.client')()

const getPersons = createLogic({
    type: ActionTypes.GET_PERSONS,
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
                dispatch(FSA(ActionTypes.GET_PERSONS_SUCCESS, false, {customers: response.payload.customers}))
                done()
            })
            .catch(error => {
                console.log(error)
                //dispatch(FSA(ActionTypes.GET_PERSONS_FAILED, true, error))
                done()
            })
    }
})

export default [getPersons]
