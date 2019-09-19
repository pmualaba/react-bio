import React from 'react'
import PropTypes from 'prop-types'

const BaseLayout = props => {
    return <div id="BaseLayout" style={{position: 'relative'}} className={`${props.subModuleName} ${props.className}`} />
}

BaseLayout.propTypes = {
    subModuleName: PropTypes.string,
    className: PropTypes.string
}

BaseLayout.defaultProps = {
    className: '',
    subModuleName: ''
}

export default BaseLayout
