import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const CheckboxContainer = styled.div`
    display: inline-block;
`

function CheckBoxElement(props) {
    const onChange = event => {
        props.onValueUpdate({checked: event.target.checked, name: props.value.name})
    }

    return (
        <div>
            <label>
                <CheckboxContainer />
                <span style={{marginLeft: 8}}>Label Text</span>
            </label>
        </div>
    )
}

CheckBoxElement.propTypes = {
    value: PropTypes.object,
    label: PropTypes.string,
    onValueUpdate: PropTypes.func
}

CheckBoxElement.defaultProps = {
    label: 'Label Text',
    value: {
        checked: false,
        name: 'option'
    },
    onValueUpdate: () => {}
}
export default CheckBoxElement
