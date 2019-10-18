import React from 'react'
import PropTypes from 'prop-types'
import Region from '../Region'
import CustomLayoutStyled from './styled'

function CustomLayout(props) {
    console.log('CustomLayout render()', props)
    return (
        <CustomLayoutStyled meta={props.meta} dna={props.dna}>
            <Region meta={props.meta} region="header">
                Header
            </Region>
            <Region meta={props.meta} region="body">
                Body
            </Region>
            <Region meta={props.meta} region="footer">
                Footer
            </Region>
        </CustomLayoutStyled>
    )
}

CustomLayout.propTypes = {
    meta: PropTypes.object,
    dna: PropTypes.object
}

export default CustomLayout
