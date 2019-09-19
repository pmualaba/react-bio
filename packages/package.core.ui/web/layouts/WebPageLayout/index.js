import React from 'react'
import PropTypes from 'prop-types'
import styled, {createGlobalStyle} from 'styled-components'
import Region from '../Region'

const WebPageLayoutStyledContext = createGlobalStyle`
    body .Region {
        font-size: 1rem;
        color: red;
    }      
`

const WebPageLayoutStyled = styled('div').attrs(props => ({
    'data-kind': 'layout',
    'data-component': `${props.meta.class}:${props.dna.set.renderLayout}`,
    'data-registry': `${props.meta['@registry']}`,
    'data-dna': `${props.meta['@dna']}`,
    className: `${props.dna.set.renderLayout} layout grid ${props.dna.ui.theme.finish.class ? props.dna.ui.theme.finish.class : ''}`
}))`
    width: 100%;
    height: 100%;

    display: block;

    > .Region {
        display: flex;
        background-color: orangered;
        padding: 12rem;
        color: white;
        font-size: 3rem;
        font-family: sans-serif;
        border: 1px solid #fff;
    }

    > .header {
        grid-area: header;
    }

    > .sidebar-left {
        grid-area: sidebar-left;
    }

    > .sidebar-right {
        grid-area: sidebar-right;
    }

    > .sidebar-right-top {
        grid-area: sidebar-right-top;
    }

    > .main {
        grid-area: main;
        padding: 0;
    }

    > .footer {
        grid-area: footer;
    }

    ${props => props.theme.CSS(props)};
`

function WebPageLayout(props) {
    console.log('WebPageLayout render()', props)
    return (
        <WebPageLayoutStyled meta={props.meta} dna={props.dna}>
            <Region meta={props.meta} region="header">
                Header
            </Region>
            <Region meta={props.meta} region="body">
                Body
            </Region>
            <Region meta={props.meta} region="footer">
                Footer
            </Region>
            <WebPageLayoutStyledContext />
        </WebPageLayoutStyled>
    )
}

WebPageLayout.propTypes = {
    meta: PropTypes.object,
    dna: PropTypes.object
}

export default WebPageLayout
