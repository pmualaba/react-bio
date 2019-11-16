import React from 'react'
import PropTypes from 'prop-types'
import styled, {keyframes, css} from 'styled-components'

const RegionStyled = styled.div.attrs(props => ({
    at: `${props.at}`,
    component: `${props.component}`,
    region: `${props.region}`
}))``

class Region extends React.Component {
    render() {
        return (
            <RegionStyled at={this.props.at} component="Region" region={this.props.region} className={`Region ${this.props.region}`}>
                {this.props.children}
            </RegionStyled>
        )
    }
}

Region.propTypes = {
    dna: PropTypes.string,
    region: PropTypes.string
}

Region.defaultProps = {
    region: ''
}

export default Region
