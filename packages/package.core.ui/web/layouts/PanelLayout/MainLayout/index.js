import React from 'react'
import Region from '../../Region'
import MainLayoutStyled from './styled'

function MainLayout(props) {
    console.log('MainLayout render()')
    return (
        <MainLayoutStyled at={props.at} component="MainLayout" className="MainLayout layout grid">
            <Region at={props.at} region="header">
                Header
            </Region>
            <Region at={props.at} region="sidebar-left">
                Sidebar Left
            </Region>
            <Region at={props.at} region="main">
                Main
            </Region>
            <Region at={props.at} region="sidebar-right">
                Sidebar Right
            </Region>
            <Region at={props.at} region="footer">
                Footer
            </Region>
        </MainLayoutStyled>
    )
}

MainLayout.propTypes = {}

MainLayout.defaultProps = {
    className: '',
    subModuleName: ''
}

export default MainLayout
