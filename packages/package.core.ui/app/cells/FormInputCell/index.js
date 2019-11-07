import React from 'react'
import PropTypes from 'prop-types'
import TextInputElement from '../../elements/TextInputElement'

const TextInputCell = props => (
    <TextInputElement
        value={props.value}
        instanceId={props.instanceId}
        instanceType={props.instanceType}
        unit={props.unit}
        rowIndex={props.rowIndex}
        dataKeys={props.dataKeys}
        meta={props.meta}
        isEditMode={props.cellIsEditMode}
        className="TextInputCell"
        themeColor={props.context.themeColor}
        placeholder={props.placeholder && (props.l ? props.placeholder[`${props.l}`] : props.placeholder)}
        onKeyUp={props.onKeyUp}
        onValueUpdate={props.onValueUpdate}
    />
)

TextInputCell.propTypes = {
    value: PropTypes.string,
    instanceId: PropTypes.string.isRequired,
    rowIndex: PropTypes.number,
    dataKeys: PropTypes.objectOf(PropTypes.string),
    meta: PropTypes.objectOf(PropTypes.any),
    cellIsEditMode: PropTypes.bool,
    cellIsActive: PropTypes.bool,
    className: PropTypes.string,
    themeColor: PropTypes.string,
    placeholder: PropTypes.string,
    onKeyUp: PropTypes.func,
    onValueUpdate: PropTypes.func.isRequired,
    validation: PropTypes.objectOf(PropTypes.any),
    l: PropTypes.string
}

TextInputCell.defaultProps = {
    rowIndex: -1,
    cellIsEditMode: false,
    cellIsActive: false
}

export default TextInputCell
