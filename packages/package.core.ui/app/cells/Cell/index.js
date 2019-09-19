import React from 'react'
import {connect} from './react-redux'
import {at} from 'lodash'
import FSA, * as ActionTypes from './actions'
import {cellDataSelector} from './selectors'
import styled, {keyframes, css} from 'styled-components'
import {renderComponents} from './functions/components'

const CellStyled = styled(styled.div`
    //background-color: #fff;
    :hover {
        background-color: #D87641 !important;
    }
   /* :hover ~ .row-${props => props.row} {
        background-color: #fff;
    } */

    &.active ~ .row-${props => props.row} {
        background-color: #fff;
    }

    :nth-child(20) {
        background-color: blue;
    }

    /* :nth-child(n + 25):nth-child(-n + 28) {
        background-color: #0f0;
    } */

    &.row-${props => Cell.rowIndex} {
        background-color: #f00;
    }
`).attrs(props => ({
    address: `${props.address}`,
    row: `${props.row}`,
    col: `${props.col}`
}))``

class Cell extends React.Component {
    state = {
        rowIndex: 0
    }
    config = this.props.config
    updateCell(row) {
        //this.setState({ data: 'test' })
    }

    componentWillMount() {
        Cell.count++
    }

    componentDidMount() {
        Cell.count++
        // console.log('Cell componentDidMount()', Cell.count++)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        //  console.log('Cell componentWillReceiveProps()')
    }
    static count = 0
    static rowIndex = 0
    static onCellUpdate(payload, meta, props) {
        console.log('ON_CELL_UPDATE', payload)
        console.log('ON_CELL_UPDATE this.props', props)

        props.onCellUpdate({
            address: props.address,
            updateMode: props.options.updateMode,
            instanceType: props.instanceType,
            instanceId: props.instanceId,
            dataKey: meta.dataKey,

            value: payload.value,
            valueType: meta.valueType,
            valueId: meta.valueId

            //  data: props.data,
            //  components: props.components,
            //  options: props.options,
        })
    }

    static onMouseOver(e, meta, props) {
        console.log('e', e.target)
        /*   const rowIndex = e.target.getAttribute('row')
    rowIndex && this.state.rowIndex !== rowIndex && this.setState({rowIndex})
    if (rowIndex) {
        Cell.rowIndex = rowIndex
    }
    // rowIndex !== this.state.rowIndex && console.log('onMouseOver state rowIndex', this.state.rowIndex)
    rowIndex && console.log('onMouseOver rowIndex', rowIndex)
    rowIndex && this.state.rowIndex !== rowIndex && document.querySelectorAll(`.row-hovered`).forEach(cell => cell.classList.remove('row-hovered'))
    document.querySelectorAll(`.row-${rowIndex}`).forEach(cell => cell.classList.add('row-hovered'))
    // e.target.classList.contains('Cell') && console.log('onMouseOver', e.target)
    // console.log('onMouseOver', this.updateCell(e.target.getAttribute('row'))) */
    }

    render() {
        console.log('Cell render()', this.props.address)

        return (
            <CellStyled
                address={`${this.props.address}`}
                row={this.props.options.row}
                col={typeof this.props.options.col !== 'undefined' ? this.props.options.col : null}
                className={`Cell row-${this.props.options.row} col-${typeof this.props.options.col !== 'undefined' ? this.props.options.col : null} ${(this.props.style &&
                    this.props.style.className) ||
                    ''}`}
            >
                {renderComponents(Cell, this.props)}
            </CellStyled>
        )
    }
}
/*
const makeMapState = () => {
    const cellDataSelector = makeCellDataSelector()
    return (state, props) => {
        return {
            data: cellDataSelector(state, props)
        }
    }
}

const mapState = (state, props) => {
    // console.log('mapState', props.address)
    if (props.options.operationMode.slice(0, 2) === 'db') {
        return {data: makeCellDataSelector(state, props)}
    }
}*/
const mapState = (state, props) => {
    /**
     *  2. on ACTION run areStatesEqual, areOwnPropsEqual, mapState (allow execution of selector)
     */

    if (props.options.operationMode.slice(0, 2) === 'db') {
        console.log('mapState', cellDataSelector(state, props))
        return {data: cellDataSelector(state, props)}
    }
    return {}
}

const actions = {
    onCellUpdate: payload => FSA(ActionTypes.ON_CELL_UPDATE, false, payload)
}

/**
 *  1. on ACTION run areStatesEqual (if true prevents execution of mapState and selector)
 */
// check if dataKey values in nextState.db have mutated or not in order to prevent execution of mapState and selector.
const areStatesEqual = (nextState, prevState, nextOwnProps, ownProps) => {
    const instanceId = nextOwnProps.instanceId
    const instanceType = nextOwnProps.instanceType.split(':')[1]
    const instancePackage = nextOwnProps.instanceType.split(':')[0]

    let dataKeyPackage = ''
    let dataKeyType = ''
    let dataKeyDepth = 0
    let dataKeyEdge = ''

    return nextOwnProps.components.every(component => {
        const dataKey = component.db.dataKey
        if (dataKey) {
            const dataKeyRoot = dataKey && dataKey.split('.')[0]
            const dataKeyRootValue = nextState.db.instances[instancePackage][instanceType][instanceId][dataKeyRoot]
            const dataKeyCardinality = (Array.isArray(dataKeyRootValue) && '*') || (dataKeyRootValue && typeof dataKeyRootValue === 'object' && 1) || 0
            switch (dataKeyCardinality) {
                case 0:
                    return dataKeyRootValue === prevState.db.instances[instancePackage][instanceType][instanceId][dataKeyRoot] || false

                case 1:
                    dataKeyPackage = dataKeyRootValue.package
                    dataKeyType = dataKeyRootValue.type
                    dataKeyDepth = dataKey.split('.').length
                    if (dataKeyDepth === 2 || dataKeyDepth === 1) {
                        dataKeyEdge = (dataKeyDepth === 2 && dataKey.split('.')[1]) || dataKeyRoot
                        return (
                            nextState.db.instances[dataKeyPackage][dataKeyType][dataKeyRootValue.id][dataKeyEdge] ===
                                prevState.db.instances[dataKeyPackage][dataKeyType][dataKeyRootValue.id][dataKeyEdge] || false
                        )
                    }

                    if (dataKeyDepth === 3) {
                        const instanceD0 = {
                            id: instanceId,
                            type: instanceType, // 'Identity'
                            package: instancePackage, // 'package.core.identity'
                            dataKey: ''
                        }
                        const instanceD1 = {
                            id: dataKeyRootValue.id,
                            type: dataKeyRootValue.type, // 'GeoLocation'
                            package: dataKeyRootValue.package, // 'package.core.identity'
                            dataKey: dataKeyRoot // hasHomeAddressGeoLocation
                        }
                        const instanceD2 = {
                            id: nextState.db.instances[instanceD1.package][instanceD1.type][instanceD1.id][dataKey.split('.')[1]].id,
                            type: nextState.db.instances[instanceD1.package][instanceD1.type][instanceD1.id][dataKey.split('.')[1]].type, // 'TaxonomyTerm'
                            package: nextState.db.instances[instanceD1.package][instanceD1.type][instanceD1.id][dataKey.split('.')[1]].package, // 'package.core.identity'
                            dataKey: dataKey.split('.')[1] // .isPrimaryClassifiedAs
                        }

                        return (
                            nextState.db.instances[instanceD2.package][instanceD2.type][instanceD2.id][dataKey.split('.')[2]] === // primitive value @.name
                                prevState.db.instances[instanceD2.package][instanceD2.type][instanceD2.id][dataKey.split('.')[2]] || false
                        )
                    }
                    if (dataKeyDepth === 4) {
                        const instanceD0 = {
                            id: instanceId,
                            type: instanceType, // 'Identity'
                            package: instancePackage, // 'package.core.identity'
                            dataKey: ''
                        }
                        const instanceD1 = {
                            id: dataKeyRootValue.id,
                            type: dataKeyRootValue.type, // 'GeoLocation'
                            package: dataKeyRootValue.package, // 'package.core.identity'
                            dataKey: dataKeyRoot // hasHomeAddressGeoLocation
                        }
                        const instanceD2 = {
                            id: nextState.db.instances[instanceD1.package][instanceD1.type][instanceD1.id][dataKey.split('.')[1]].id,
                            type: nextState.db.instances[instanceD1.package][instanceD1.type][instanceD1.id][dataKey.split('.')[1]].type, // 'TaxonomyTerm'
                            package: nextState.db.instances[instanceD1.package][instanceD1.type][instanceD1.id][dataKey.split('.')[1]].package, // 'package.core.identity'
                            dataKey: dataKey.split('.')[1] // .isPrimaryClassifiedAs
                        }

                        const instanceD3 = {
                            id: nextState.db.instances[instanceD2.package][instanceD2.type][instanceD2.id][dataKey.split('.')[2]].id,
                            type: nextState.db.instances[instanceD2.package][instanceD2.type][instanceD2.id][dataKey.split('.')[2]].type, // 'TaxonomyTerm'
                            package: nextState.db.instances[instanceD2.package][instanceD2.type][instanceD2.id][dataKey.split('.')[2]].package, // 'package.core.identity'
                            dataKey: dataKey.split('.')[2] // .isPrimaryClassifiedAs
                        }

                        return (
                            nextState.db.instances[instanceD3.package][instanceD3.type][instanceD3.id][dataKey.split('.')[3]] === // primitive value @.name
                                prevState.db.instances[instanceD3.package][instanceD3.type][instanceD3.id][dataKey.split('.')[3]] || false
                        )
                    }
                    break

                case '*':
                    dataKeyDepth = dataKey.split('.').length
                    dataKeyEdge = (dataKeyDepth === 2 && dataKey.split('.')[1]) || dataKeyRoot
                    return (
                        nextState.db.collections[instancePackage][instanceType][instanceId][dataKeyEdge] ===
                            prevState.db.collections[instancePackage][instanceType][instanceId][dataKeyEdge] || false
                    )
                default:
                //default handler
            }
        } else {
            return true
        }
    })
}

/**
 *  4. on ACTION run areStatesEqual, areOwnPropsEqual, mapState, selector, areStatePropsEqual (prevents render of connected Cell component)
 *     if true do not render connected Component, if false render connected Component with mapState props
 */
const areStatePropsEqual = (nextState, prevState) => {
    console.log('areStatePropsEqual nextState', nextState)
    console.log('areStatePropsEqual prevState', prevState)
    return (nextState && nextState.data === prevState.data) || false
}

export default connect(
    mapState,
    actions,
    null,
    {
        areStatesEqual
    }
)(Cell)

//[component.db.dataKey]: this.props.cellData[component.db.dataKey]
//  {this.props.RDRcellComponent(value, Cell.onCellUpdate, this.props)}

/**
 * cellProps: {
        width: 100,
        clickable: true,
        clickAction: '',
        customClass: '',
        instanceType: 'Identity',
        isLocalized: true,  // was i18nEnabled
     // componentName: 'ComposableCell', // default (props.componentName)
        components: [                               (props.components)
            {
                db: {
                    dataKey: 'firstName',
                    type: 'Identity', //inherit
                    validation: 'string|1|*|range|style|default',
                    selectionKey: 'customers.firstName',
                    selectionDefaultValue: 'customers.filter(first)',
                    selectionFilter: {
                        'customers.name': null,
                        function: 'customers.filter(availableReplacementVehicles)'
                    },
                },
                ui: {
                    dataKeys: ['fullName'],
                    cellComponent: {
                        componentName: 'SelectIconCell',
                        componentKeys: {label: 'customers.label', iconInitials: 'fullName'}
                        componentProps: {
                            iconType: 'img'
                        }
                    },
                    dependencies: [
                        {
                            dependentOn: 'name',
                            dependencyType: 'validation', // validation|logic|sync|link
                            dependencyResolver: 'reveal', // none|flash|notification|reveal|enable|switch|refresh
                            dependencyPayload: {}
                        }
                    ],
                    elementComponent: {
                        componentName: 'CellElement',
                        componentProps: {
                            dropdownDefaultOpen: true
                        }

                        optionComponentS: [
                            {
                                selectionKey: 'customers.avatar',
                                componentKeys: {label: 'customers.label'}
                                componentName: 'IconElement',
                                componentProps: {iconType: 'svg'}
                            },
                            {
                                selectionKey: 'customers.name',
                                componentName: 'TextElement',
                                componentProps: {},
                                i18nEnabled: false
                            },
                            {
                                selectionKey: 'customers.email',
                                componentName: 'TextElement',
                                componentProps: {},
                                i18nEnabled: false
                            }
                        ],
                        valueComponentS: [
                            {
                                selectionKey: 'customers.avatar',
                                componentName: 'IconElement',
                                componentProps: {iconType: 'svg'}
                            },
                            {
                                selectionKey: 'customers.name',
                                componentName: 'TextElement',
                                componentProps: {},
                                i18nEnabled: false
                            },
                            {
                                selectionKey: 'customers.email',
                                componentName: 'TextElement',
                                componentProps: {},
                                i18nEnabled: false
                            }
                        ]
                    }
                }
            },
            {
                db: {
                    dataKey: 'firstName',
                    type: 'Identity', // inherit
                    validation: 'string|*|range|style|default',
                    selectionDbValueKey: 'customers.firstName',
                    selectionDefaultValue: 'customers.filter(first)',
                    selectionFilter: {
                        'customers.name': null,
                        function: 'customers.filter(availableReplacementVehicles)'
                    }
                },
                ui: {
                    cellComponent: {
                        componentName: 'ComposableCell',
                        componentProps: {
                            iconType: 'img'
                        }
                    },
                    dependencies: [
                        {
                            dependentOn: 'name',
                            dependencyType: 'validation', // validation|logic|sync|link
                            dependencyResolver: 'reveal', // none|flash|notification|reveal|enable|switch|refresh
                            dependencyPayload: {}
                        }
                    ],
                    elements: {
                        valueComponent: [
                            {
                                componentName: 'IconElement',
                                selectionKey: 'customers.avatar',
                                componentProps: {iconType: 'svg'}
                            },
                            {
                                componentName: 'TextElement',
                                selectionKey: 'customers.name',
                                i18nEnabled: false,
                                componentProps: {}
                            },
                            {
                                componentName: 'TextElement',
                                selectionKey: 'customers.email',
                                i18nEnabled: false,
                                componentProps: {}
                            }
                        ],
                        optionComponent: [
                            {
                                componentName: 'IconElement',
                                selectionKey: 'customers.avatar',
                                componentProps: {iconType: 'svg'}
                            },
                            {
                                componentName: 'TextElement',
                                selectionKey: 'customers.name',
                                i18nEnabled: false,
                                componentProps: {}
                            },
                            {
                                componentName: 'TextElement',
                                selectionKey: 'customers.email',
                                i18nEnabled: false,
                                componentProps: {}
                            }
                        ]
                    }
                }
            },
 */
