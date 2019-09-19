import createCachedSelector from 're-reselect'
import at from 'lodash/at'
/*
const instance = (state, props) => state.db.instances[props.instanceType.split(':')[0]][props.instanceType.split(':')[1]][props.instanceId]

export const makeCellDataSelector = (state, props) =>
    createSelector(
        /**
         * if cellOperationMode is db.
         */
/*        [instance, (state, props) => props],
        (instance, props) => {
            return (props.components.length === 1 && at(instance, [props.components[0].db.dataKey])[0]) || instance
        }
    ) */
const getInstance = (state, props) => state.db.instances[props.instanceType.split(':')[0]][props.instanceType.split(':')[1]][props.instanceId]
const getInstances = state => state.db.instances
const getInstanceCollections = (state, props) => state.db.collections[props.instanceType.split(':')[0]][props.instanceType.split(':')[1]][props.instanceId]
const getProps = (state, props) => props

//  const instance = state.db.instances[props.instanceType.split(':')[0]][props.instanceType.split(':')[1]][props.instanceId]
//  return instance
//  return (props.components.length === 1 && {data: at(instance, [props.components[0].db.dataKey])[0]}) || {data: instance}

export const cellDataSelector = createCachedSelector(
    /**
     * 3. on ACTION run areStatesEqual, areOwnPropsEqual, mapState, selector
     * if cellOperationMode is db.
     */

    [getInstance, getInstances, getInstanceCollections, getProps],
    (instance, instances, instanceCollections, props) => {
        const cellData = {}

        props.components.forEach((component, i) => {
            const dataKey = component.db.dataKey
            const dataKeyDepth = dataKey === '' ? 0 : dataKey.split('.').length
            const dataKeyRoot = dataKey.split('.')[0]

            /**
             * if dataKeyRoot value is Array
             */
            if (Array.isArray(instance[dataKeyRoot])) {
                console.log('instanceCollections[dataKeyRoot]', instanceCollections[dataKeyRoot])
                return (cellData[dataKey] = {
                    valueId: instance.id,
                    valueType: `${instance.package}:${instance.type}`,
                    value: instanceCollections[dataKeyRoot].map(instance => instances[instance.package][instance.type][instance.id]) || []
                })
            }

            /**
             * if dataKeyRoot value is Object
             */
            if (instance[dataKeyRoot] && typeof instance[dataKeyRoot] === 'object') {
                if (dataKeyDepth === 1) {
                    return (cellData[dataKey] = {
                        valueId: instance[dataKeyRoot].id,
                        valueType: `${instance[dataKeyRoot].package}:${instance[dataKeyRoot].type}`,
                        value: instances[instance[dataKeyRoot].package][instance[dataKeyRoot].type][instance[dataKeyRoot].id] || null
                    })
                }
                if (dataKeyDepth === 2) {
                    const dataKeyEdge = dataKey.split('.')[1]
                    return (cellData[dataKey] = {
                        valueId: instance[dataKeyRoot].id,
                        valueType: `${instance[dataKeyRoot].package}:${instance[dataKeyRoot].type}`,
                        value: instances[instance[dataKeyRoot].package][instance[dataKeyRoot].type][instance[dataKeyRoot].id][dataKeyEdge] || null
                    })
                }
                if (dataKeyDepth === 3) {
                    const instanceD0 = {
                        id: instance.id,
                        type: instance.type, // 'Identity'
                        package: instance.package, // 'package.core.identity'
                        dataKey: ''
                    }
                    const instanceD1 = {
                        id: instance[dataKeyRoot].id,
                        type: instance[dataKeyRoot].type, // 'GeoLocation'
                        package: instance[dataKeyRoot].package, // 'package.core.identity'
                        dataKey: dataKey.split('.')[0] // hasHomeAddressGeoLocation
                    }
                    const instanceD2 = {
                        id: instances[instanceD1.package][instanceD1.type][instanceD1.id][dataKey.split('.')[1]].id,
                        type: instances[instanceD1.package][instanceD1.type][instanceD1.id][dataKey.split('.')[1]].type, // 'TaxonomyTerm'
                        package: instances[instanceD1.package][instanceD1.type][instanceD1.id][dataKey.split('.')[1]].package, // 'package.core.identity'
                        dataKey: dataKey.split('.')[1] // .isPrimaryClassifiedAs
                    }
                    const valueD3 = instances[instanceD2.package][instanceD2.type][instanceD2.id][dataKey.split('.')[2]] // primitive value @.name

                    return (cellData[dataKey] = {
                        valueId: instanceD2.id,
                        valueType: `${instanceD2.package}:${instanceD2.type}`,
                        value: valueD3 || null
                    })
                }
            }

            /**
             * if dataKey is '' return complete instance
             */
            if (dataKeyDepth === 0) {
                return (cellData[dataKey] = {
                    valueId: instance.id,
                    valueType: `${instance.package}:${instance.type}`,
                    value: instance || null
                })
            }

            /**
             * if dataKeyRoot value is Primitive
             */
            return (cellData[dataKey] = {
                valueId: instance.id,
                valueType: `${instance.package}:${instance.type}`,
                value: instance[dataKey] || null,
                selection: null,
                notification: null
            })
        })
        console.log('selector', cellData)
        return cellData
    }
)((state, props) => props.address)
