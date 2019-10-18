import React from 'react'
import PropTypes from 'prop-types'
import Region from '../Region'
import MainLayout from './MainLayout'
import RegionControl from '../Region/RegionControl'
import PanelLayoutStyled from './styled'

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
        </PanelLayoutStyled>
    )
}

PanelLayout.propTypes = {}

PanelLayout.defaultProps = {
    className: '',
    subModuleName: ''
}

export default PanelLayout
