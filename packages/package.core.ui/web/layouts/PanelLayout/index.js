import React from 'react'
import PropTypes from 'prop-types'
import styled, {createGlobalStyle} from 'styled-components'
import Region from '../Region'
import MainLayout from './MainLayout'
import RegionControl from '../Region/RegionControl'

const PanelLayoutStyledContext = createGlobalStyle`
    body .Region {
        font-size: 1rem;
        color: red;
    }      
`

const PanelLayoutStyled = styled('div').attrs(props => ({
    'data-kind': 'layout',
    'data-component': `${props.meta.class}:${props.dna.set.renderLayout}`,
    'data-registry': `${props.meta['@registry']}`,
    'data-dna': `${props.meta['@dna']}`,
    className: `${props.dna.set.renderLayout} layout grid ${props.dna.ui.theme.finish.class ? props.dna.ui.theme.finish.class : ''}`
}))`
    width: 100%;
    height: 100%;

    display: grid;
    grid-gap: 0;
    grid-template-rows: 10rem 1fr 10rem;
    grid-template-columns: 20rem 1fr 20rem;
    grid-template-areas:
        'sidebar-left   header  sidebar-right'
        'sidebar-left   main    sidebar-right'
        'sidebar-left   footer  sidebar-right';

    > .Region {
        display: flex;
        background-color: orangered;
        padding: 2rem;
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

function PanelLayout(props) {
    console.log('PanelLayout render()', props)
    return (
        <PanelLayoutStyled meta={props.meta} dna={props.dna}>
            <Region meta={props.meta} region="header">
                H
            </Region>
            <Region meta={props.meta} region="sidebar-left">
                <RegionControl />
            </Region>
            <Region meta={props.meta} region="main">
                <MainLayout meta={props.meta} />
            </Region>
            <Region meta={props.meta} region="sidebar-right">
                S
            </Region>
            <Region meta={props.meta} region="footer">
                F
            </Region>
            <PanelLayoutStyledContext />
        </PanelLayoutStyled>
    )
}

PanelLayout.propTypes = {
    subModuleName: PropTypes.string,
    className: PropTypes.string
}

PanelLayout.defaultProps = {
    className: '',
    subModuleName: ''
}

export default PanelLayout
