import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CheckboxElementStyled = styled('element')`
    display: inline-block;
    vertical-align: middle;
    font-family: system-ui, sans-serif;
`

const Icon = styled.svg`
    fill: none;
    stroke: red;
    stroke-width: 2px;
`

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input`
    /*   border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;*/
`
HiddenCheckbox.defaultProps = {type: 'checkbox', className: 'HiddenCheckbox'}

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  background: ${props => {
      console.log('TEST', props.checked)
      return props.checked ? 'blue' : 'green'
  }}
  border-radius: 3px;
 /* transition: all 150ms; */

 /* ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }
*/
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`

/*
const CheckBoxElement = ({className, checked, ...props}) => (
    <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
            <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer>
)*/

function CheckBoxElement(props) {
    console.log('props', props)
    const onChange = event => {
        console.log('event', event.target.checked)
        props.onValueUpdate({checked: !event.target.checked, name: props.value.name})
    }

    return (
        <CheckboxElementStyled is="CheckBoxElement" className={`CheckBoxElement ${props.className}`}>
            <label>
                <HiddenCheckbox checked={props.value.checked} onChange={onChange} />
                <StyledCheckbox checked={props.value.checked}>
                    <Icon viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                    </Icon>
                </StyledCheckbox>
                <span style={{marginLeft: 8}}>{props.label}</span>
            </label>
        </CheckboxElementStyled>
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
        checked: true,
        name: 'option'
    },
    onValueUpdate: () => {}
}
export default CheckBoxElement
