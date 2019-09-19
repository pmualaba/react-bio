import {connect} from 'react-redux'
import PersonList from './index'
import FSA, * as ActionTypes from './actions'
import {blockPersonListSelector, dataPersonListSelector, configPersonListSelector} from './selectors'

const mapState = (state, props) => {
    console.log('MAPSTATE PersonList')
    return {
        block: blockPersonListSelector(state),
        data: dataPersonListSelector(state),
        config: configPersonListSelector(state)
    }
}

const actions = {
    getPersonListData: meta =>
        FSA(
            ActionTypes.GET_PERSONS,
            false,
            {},
            {
                ...meta,
                trace: [...meta.trace, 'package.core.crm/admin/components/PersonList/container.js/actions/getPersonListData']
            }
        ),
    onPersonEditClick: rowIndex => FSA(ActionTypes.EDIT_PERSON, false, {rowIndex}),
    onDeletePerson: payload => FSA(ActionTypes.DELETE_PERSON, false, payload),
    onCellUpdate: payload => FSA(ActionTypes.ON_CELL_UPDATE, false, payload),
    onComponentHook: hook => FSA(ActionTypes.ON_COMPONENT_HOOK, false, {hook})
}

export default connect(mapState, actions)(PersonList)
