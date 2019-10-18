import {combineReducers} from 'redux'
import * as ActionTypes from './actions'
import * as cellActionTypes from './../../package.core.ui/app/cells/Cell/actions'

/**
 * Initial State db
 */
export const instances = {
    'package.core.cms': {}
}

export const collections = {
    'package.core.cms': {
        WebPage: {},
        WebPageSection: {},
        FieldGroup: {},
        CustomField: {}
    }
}

export const selections = {
    yesNoMaybe: {
        query: null,
        result: {
            values: [{key: 'Y', name: 'Yes'}, {key: 'N', name: 'No'}, {key: 'M', name: 'Maybe'}],
            pagination: {
                size: 3,
                page: 1,
                pages: 1,
                items: 3
            }
        }
    }
}

export const queries = {
    'package.core.cms': {
        GET_ARTICLES: []
    }
}

export const mutations = {
    'package.core.cms': {
        CREATE_STORY: {
            id: null,
            name: null
        }
    }
}

/**
 * Reducers Instances
 */
const instanceReducer = (state = instances, action) => {
    switch (action.type) {
        case cellActionTypes.ON_CELL_UPDATE:
            const packageName = action.payload.valueType.split(':')[0]
            const instanceType = action.payload.valueType.split(':')[1]
            const instanceId = action.payload.valueId
            const dataKey = action.payload.dataKey.split('.').pop()

            return {
                ...state,
                [packageName]: {
                    ...state[packageName],
                    [instanceType]: {
                        ...state[packageName][instanceType],
                        [instanceId]: {
                            ...state[packageName][instanceType][instanceId],
                            [dataKey]: action.payload.value
                        }
                    }
                }
            }

        default:
            return state
    }
}

/**
 * Reducers Collections
 */
const collectionReducer = (state = collections, action) => {
    switch (action.type) {
        default:
            return state
    }
}

/**
 * Reducers Selections
 */
const selectionReducer = (state = selections, action) => {
    switch (action.type) {
        default:
            return state
    }
}
/**
 * Reducers Graphs
 */
const queryReducer = (state = queries, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const mutationReducer = (state = mutations, action) => {
    switch (action.type) {
        default:
            return state
    }
}

/**
 * Export Reducers
 */
export default combineReducers({
    instances: instanceReducer,
    collections: collectionReducer,
    selections: selectionReducer,
    queries: queryReducer,
    mutations: mutationReducer
})
