import React from 'react'
import TextInputCell from '../../TextInputCell'
import GridTableHeadCell from '../../GridTableHeadCell'
import RowStartCell from '../../../blocks/tables/GridTable/RowStartCell'
import {filterSelectOptions} from './'
import {at} from 'lodash'

export const renderComponents = (Cell, props) => {
    //const values = props.components.reduce((values, component) => ({...values, [component.db.dataKey]: at(props.data, component.db.dataKey)[0]}), {})
    //const values = props.components.reduce((values, component, index) => ({...values, [component.db.dataKey]: props.data}), {})

    return props.components.map(component => {
        const dataKeyValue = props.data && props.data[component.db.dataKey]
        const value = dataKeyValue && typeof dataKeyValue === 'object' && dataKeyValue.value
        console.log('VALUE MICROCELL', value)

        const meta = {
            dataKey: component.db.dataKey,
            valueType: props.data && props.data[component.db.dataKey] && props.data[component.db.dataKey].valueType,
            valueId: props.data && props.data[component.db.dataKey] && props.data[component.db.dataKey].valueId
        }

        return {
            GridTableHeadCell: (
                <GridTableHeadCell
                    address={props.address}
                    value={value}
                    onValueUpdate={payload => Cell.onCellUpdate(payload, meta, props)}
                    {...component.ui.cellComponent.componentProps}
                />
            ),
            RowStartCell: (
                <RowStartCell
                    address={props.address}
                    value={value}
                    row={props.options.row}
                    onValueUpdate={payload => Cell.onCellUpdate(payload, meta, props)}
                    {...component.ui.cellComponent.componentProps}
                />
            ),
            TextInputCell: (
                <TextInputCell
                    address={props.address}
                    value={value}
                    onValueUpdate={payload => Cell.onCellUpdate(payload, meta, props)}
                    {...component.ui.cellComponent.componentProps}
                />
            )
        }[component.ui.cellComponent.componentName]
    })
}
