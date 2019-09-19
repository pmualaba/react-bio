import React from 'react'
import PropTypes from 'prop-types'
import styled, {createGlobalStyle} from 'styled-components'
import Region from '../Region'

const CustomLayoutStyledContext = createGlobalStyle`
    body .Region {
        font-size: 2rem;
        color: red;
    }      
`

const CustomLayoutStyled = styled('div').attrs(props => ({
    'data-kind': 'layout',
    'data-component': `${props.meta.class}:${props.dna.set.renderLayout}`,
    'data-registry': `${props.meta['@registry']}`,
    'data-dna': `${props.meta['@dna']}`,
    style: props.dna.ui.theme.finish.style,
    className: `${props.dna.set.renderLayout} ${props.dna.ui.theme.finish.class ? props.dna.ui.theme.finish.class : ''}`
}))`
    .Region {
        padding: 100px;
    }
    ${props => props.theme.CSS(props)};
`

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
            <CustomLayoutStyledContext />
        </CustomLayoutStyled>
    )
}

CustomLayout.propTypes = {
    meta: PropTypes.object,
    dna: PropTypes.object
}

export default CustomLayout
