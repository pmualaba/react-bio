import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import LockButton from '../../../elements/LockButton'

const RegionControlStyled = styled.div.attrs(props => ({
    at: `${props.at}`,
    component: `${props.component}`
}))`
    display: flex;
`

const RegionControl = props => {
    return (
        <RegionControlStyled>
            <LockButton name={props.name} isLocked={props.isLocked} onClick={props.onClick} />
        </RegionControlStyled>
    )
}

RegionControl.propTypes = {}

export default RegionControl
