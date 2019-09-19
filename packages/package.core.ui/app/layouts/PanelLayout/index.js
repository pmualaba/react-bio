import React from 'react'
import PropTypes from 'prop-types'
import styled, {keyframes, css, createGlobalStyle} from 'styled-components'
import Region from '../Region'
import MainLayout from './MainLayout'
import RegionControl from '../Region/RegionControl'

const PanelLayoutStyledContext = createGlobalStyle`
      body .Region {
        font-size: 5rem;
      }`

const PanelLayoutStyled = styled.div.attrs(props => ({
    at: `${props.at}`,
    component: `${props.component}`
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
`

class PanelLayout extends React.Component {
    render() {
        // console.log('PanelLayout render()', this.props)
        const at = this.props.dna.meta['@dna']
        return (
            <PanelLayoutStyled at={at} component="PanelLayout" className="PanelLayout layout grid" styles={this.props.dna.styles} {...this.props.dna.meta.componentProps}>
                <Region at={at} region="header">
                    H
                </Region>
                <Region at={at} region="sidebar-left">
                    <RegionControl />
                </Region>
                <Region at={at} region="main">
                    <MainLayout at={at} />
                </Region>
                <Region at={at} region="sidebar-right">
                    S
                </Region>
                <Region at={at} region="footer">
                    F
                </Region>
                <PanelLayoutStyledContext />
            </PanelLayoutStyled>
        )
    }
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
