import {combineReducers} from 'redux'
import * as ActionTypes from './actions'
import * as cellActionTypes from './../../package.core.ui/app/cells/Cell/actions'

/**
 * Initial State db
 */
export const instances = {
    'package.core.identity': {
        Identity: {
            '1': {
                id: '1',
                type: 'Identity',
                package: 'package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789654',
                    type: 'GeoLocation',
                    package: 'package.core.identity'
                },
                hasHomeAddressGeoLocations: [
                    {
                        type: 'GeoLocation',
                        package: 'package.core.identity'
                    }
                ]
            },
            '2': {
                id: '2',
                type: 'Identity',
                package: 'package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789655',
                    type: 'GeoLocation',
                    package: 'package.core.identity'
                },
                hasHomeAddressGeoLocations: [
                    {
                        type: 'GeoLocation',
                        package: 'package.core.identity'
                    }
                ]
            },
            '3': {
                id: '3',
                type: 'Identity',
                package: 'package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789656',
                    type: 'GeoLocation',
                    package: 'package.core.identity'
                }
            },
            '4': {
                id: '4',
                type: 'Identity',
                package: 'package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789657',
                    type: 'GeoLocation',
                    package: 'package.core.identity'
                }
            },
            '5': {
                id: '5',
                type: 'Identity',
                package: 'package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789658',
                    type: 'GeoLocation',
                    package: 'package.core.identity'
                }
            },
            '6': {
                id: '6',
                type: 'Identity',
                package: 'package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789659',
                    type: 'GeoLocation',
                    package: 'package.core.identity'
                }
            },
            '7': {
                id: '7',
                type: 'Identity',
                package: 'package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789660',
                    type: 'GeoLocation',
                    package: 'package.core.identity'
                }
            },
            '8': {
                id: '8',
                type: 'Identity',
                package: 'package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789661',
                    type: 'GeoLocation',
                    package: 'package.core.identity'
                }
            },
            '9': {
                id: '9',
                type: 'Identity',
                package: 'package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789662',
                    type: 'GeoLocation',
                    package: 'package.core.identity'
                }
            },
            '10': {
                id: '10',
                type: 'Identity',
                package: 'package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789663',
                    type: 'GeoLocation',
                    package: 'package.core.identity'
                }
            },
            '11': {
                id: '11',
                type: 'Identity',
                package: 'package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789664',
                    type: 'GeoLocation',
                    package: 'package.core.identity'
                }
            },
            '12': {
                id: '12',
                type: 'Identity',
                package: 'package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789654',
                    type: 'GeoLocation',
                    package: 'package.core.identity'
                }
            }
        },
        GeoLocation: {
            '789654': {
                id: '789654',
                type: 'GeoLocation',
                package: 'package.core.erp',
                street: 'Gevaertstraat 54',
                zipCode: '1800',
                city: 'Vilvoorde',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321654',
                    type: 'TaxonomyTerm',
                    package: 'package.core.identity'
                }
            },
            '789656': {
                id: '789656',
                type: 'GeoLocation',
                package: 'package.core.erp',
                street: 'Gevaertstraat 56',
                zipCode: '1800',
                city: 'Vilvoorde',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321655',
                    type: 'TaxonomyTerm',
                    package: 'package.core.identity'
                }
            },
            '789657': {
                id: '789657',
                type: 'GeoLocation',
                package: 'package.core.erp',
                street: 'Gevaertstraat 57',
                zipCode: '1800',
                city: 'Vilvoorde',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321656',
                    type: 'TaxonomyTerm',
                    package: 'package.core.identity'
                }
            },
            '789658': {
                id: '789658',
                type: 'GeoLocation',
                package: 'package.core.erp',
                street: 'Gevaertstraat 58',
                zipCode: '1800',
                city: 'Vilvoorde',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321657',
                    type: 'TaxonomyTerm',
                    package: 'package.core.identity'
                }
            },
            '789659': {
                id: '789659',
                type: 'GeoLocation',
                package: 'package.core.erp',
                street: 'Gevaertstraat 59',
                zipCode: '1800',
                city: 'Vilvoorde',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321654',
                    type: 'TaxonomyTerm',
                    package: 'package.core.identity'
                }
            },
            '789660': {
                id: '789660',
                type: 'GeoLocation',
                package: 'package.core.erp',
                street: 'Gevaertstraat 60',
                zipCode: '1800',
                city: 'Vilvoorde',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321654',
                    type: 'TaxonomyTerm',
                    package: 'package.core.identity'
                }
            },
            '789661': {
                id: '789661',
                type: 'GeoLocation',
                package: 'package.core.erp',
                street: 'Gevaertstraat 61',
                zipCode: '1800',
                city: 'Vilvoorde',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321658',
                    type: 'TaxonomyTerm',
                    package: 'package.core.identity'
                }
            },
            '789662': {
                id: '789662',
                type: 'GeoLocation',
                package: 'package.core.erp',
                street: 'Gevaertstraat 62',
                zipCode: '1800',
                city: 'Vilvoorde',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321658',
                    type: 'TaxonomyTerm',
                    package: 'package.core.identity'
                }
            },
            '789663': {
                id: '789663',
                type: 'GeoLocation',
                package: 'package.core.erp',
                street: 'Gevaertstraat 63',
                zipCode: '1800',
                city: 'Vilvoorde',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321659',
                    type: 'TaxonomyTerm',
                    package: 'package.core.identity'
                }
            },
            '789664': {
                id: '789664',
                type: 'GeoLocation',
                package: 'package.core.erp',
                street: 'Gevaertstraat 64',
                zipCode: '1800',
                city: 'Vilvoorde',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321659',
                    type: 'TaxonomyTerm',
                    package: 'package.core.identity'
                }
            },
            '789655': {
                id: '789655',
                type: 'GeoLocation',
                package: 'package.core.erp',
                street: 'Anspachlaan 25',
                zipCode: '1000',
                city: 'Brussel',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321659',
                    type: 'TaxonomyTerm',
                    package: 'package.core.identity'
                }
            }
        },
        TaxonomyTerm: {
            '321654': {
                id: '321654',
                type: 'TaxonomyTerm',
                package: 'package.core.identity',
                name: 'city'
            },
            '321655': {
                id: '321655',
                type: 'TaxonomyTerm',
                package: 'package.core.identity',
                name: 'city2'
            },
            '321656': {
                id: '321656',
                type: 'TaxonomyTerm',
                package: 'package.core.identity',
                name: 'city3'
            },
            '321657': {
                id: '321657',
                type: 'TaxonomyTerm',
                package: 'package.core.identity',
                name: 'city4'
            },
            '321658': {
                id: '321658',
                type: 'TaxonomyTerm',
                package: 'package.core.identity',
                name: 'city5'
            },
            '321659': {
                id: '321659',
                type: 'TaxonomyTerm',
                package: 'package.core.identity',
                name: 'city6'
            },
            '321660': {
                id: '321660',
                type: 'TaxonomyTerm',
                package: 'package.core.identity',
                name: 'city7'
            }
        }
    },
    'package.core.erp': {
        Window: {
            '1594': {
                id: '1594',
                type: 'Window',
                package: 'package.core.erp',
                startTime: '2000-01-01T06:00:00+0200',
                endTime: '2000-01-01T12:00:00+0200'
            },
            '821346': {
                id: '821346',
                type: 'Window',
                package: 'package.core.erp',
                startTime: '2000-01-01T06:00:00+0200',
                endTime: '2000-01-01T12:00:00+0200'
            },
            '16820': {
                id: '16820',
                type: 'Window',
                package: 'package.core.erp',
                startTime: '2000-01-01T06:00:00+0200',
                endTime: '2000-01-01T12:00:00+0200'
            },
            '944357': {
                id: '944357',
                type: 'Window',
                package: 'package.core.erp',
                startTime: '2000-01-01T06:00:00+0200',
                endTime: '2000-01-01T12:00:00+0200'
            }
        }
    }
}

export const collections = {
    'package.core.identity': {
        Identity: {
            all: [
                {id: '2', type: 'Identity', package: 'package.core.identity'},
                {id: '3', type: 'Identity', package: 'package.core.identity'},
                {id: '4', type: 'Identity', package: 'package.core.identity'},
                {id: '1', type: 'Identity', package: 'package.core.identity'},
                {id: '5', type: 'Identity', package: 'package.core.identity'},
                {id: '6', type: 'Identity', package: 'package.core.identity'},
                {id: '8', type: 'Identity', package: 'package.core.identity'},
                {id: '9', type: 'Identity', package: 'package.core.identity'},
                {id: '7', type: 'Identity', package: 'package.core.identity'},
                {id: '10', type: 'Identity', package: 'package.core.identity'},
                {id: '11', type: 'Identity', package: 'package.core.identity'},
                {id: '12', type: 'Identity', package: 'package.core.identity'}
            ],
            '1': {
                hasHomeAddressGeoLocations: [
                    {id: '789654', type: 'GeoLocation', package: 'package.core.identity'},
                    {id: '789659', type: 'GeoLocation', package: 'package.core.identity'}
                ]
            },
            '2': {
                hasHomeAddressGeoLocations: [
                    {id: '789655', type: 'GeoLocation', package: 'package.core.identity'},
                    {id: '789660', type: 'GeoLocation', package: 'package.core.identity'}
                ]
            }
        },
        Availability: {
            '456789': {
                hasWindows: [{id: '1594', type: 'Window', package: 'package.core.erp'}, {id: '821346', type: 'Window', package: 'package.core.erp'}]
            },
            '789456': {
                hasWindows: [{id: '16820', type: 'Window', package: 'package.core.erp'}, {id: '944357', type: 'Window', package: 'package.core.erp'}]
            }
        },
        Calendar: {
            '123456': {
                hasAvailability: [{id: '456789', type: 'Availability', package: 'package.core.erp'}, {id: '789456', type: 'Availability', package: 'package.core.erp'}]
            }
        },
        GeoLocation: {
            '789654': {
                isClassifiedAs: [
                    {id: '321654', type: 'TaxonomyTerm', package: 'package.core.identity'},
                    {id: '321655', type: 'TaxonomyTerm', package: 'package.core.identity'}
                ]
            },
            '789656': {
                isClassifiedAs: [
                    {id: '321656', type: 'TaxonomyTerm', package: 'package.core.identity'},
                    {id: '321657', type: 'TaxonomyTerm', package: 'package.core.identity'}
                ]
            },
            '789657': {
                isClassifiedAs: [
                    {id: '321658', type: 'TaxonomyTerm', package: 'package.core.identity'},
                    {id: '321657', type: 'TaxonomyTerm', package: 'package.core.identity'}
                ]
            },
            '789658': {
                isClassifiedAs: [
                    {id: '321659', type: 'TaxonomyTerm', package: 'package.core.identity'},
                    {id: '321657', type: 'TaxonomyTerm', package: 'package.core.identity'}
                ]
            }
        }
    }
}

export const selections = {
    customers: {
        query: {
            selection: 'customers',
            action: 'GET_CUSTOMERS',
            api: 'local',
            params: {},
            pagination: {
                size: 50,
                page: 1
            },
            cache: 10 * 1000, // milliseconds,
            expires: 1520267881
        },
        result: {
            values: [],
            pagination: {}
        }
    },
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
    /**
     * query results (sub graphs) should be read-only and only be used for ui mounting of top level components,
     * followed by optimistic cellUpdates on db.instances/db.collections,
     * followed by realistic instanceFragment updates based on cellUpdates
     * OR realistic subGraph updates based on mutation templates.
     */
    'package.core.identity': {
        GET_APPOINTMENTS: []
    }
}

export const mutations = {
    /**
     * mutation templates (sub graphs) should be write-only and only be used to prepare a realistic subGraph update and populated by a sequence of cellUpdates.
     * Once the mutation template validates it can be used as payload for a realistic subGraph update
     */
    'package.core.identity': {
        CREATE_APPOINTMENT: {
            id: null,
            name: null,
            requiresResources: [
                {
                    id: null
                }
            ],
            hasAsSubject: {}
            // ...
        }
    }
}

/**
 * Optimistic deletes should also have access to the schema to resolve CASCADE deletion paths
 * and gather all ids that needs to be optimistically deleted form db.collections/db.instances
 */

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
