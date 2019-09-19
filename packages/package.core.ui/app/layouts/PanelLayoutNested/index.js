import React from 'react'
import PropTypes from 'prop-types'
import styled, {keyframes, css} from 'styled-components'
import Region from '../Region'
import PanelLayoutChild from '../PanelLayout'

const PanelLayoutStyled = styled.div`
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
        background-color: orangered;
        padding: 2rem;
        color: white;
        font-size: 3rem;
        font-family: sans-serif;
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
    }

    > .footer {
        grid-area: footer;
    }
`

class PanelLayout extends React.Component {
    render() {
        // console.log('PanelLayout render()')
        return (
            <PanelLayoutStyled className="PanelLayout layout grid">
                <Region region="header">Header</Region>
                <Region region="sidebar-left">Sidebar Left</Region>
                <Region region="main">
                    {!this.props.once && (
                        <PanelLayoutChild once>
                            <Region region="header">Header</Region>
                        </PanelLayoutChild>
                    )}
                </Region>
                <Region region="sidebar-right">Sidebar Right</Region>
                <Region region="footer">Footer</Region>
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
