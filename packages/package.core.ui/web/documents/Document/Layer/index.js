import React from 'react'
import PropTypes from 'prop-types'

const Layer = props => {
    switch (props.id) {
        case 'layout':
            return (
                <div className="Layer" id={props.id} style={{height: '100%'}}>
                    {props.children}
                </div>
            )

        case 'notification':
            return <div className="Layer" id={props.id} />

        case 'modal':
            return <div className="Layer" id={props.id} />

        case 'takeover':
            return <div className="Layer" id={props.id} />

        case 'dom':
            return <div className="Layer" id={props.id} />

        default:
            return null
    }
}

Layer.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.element
}

Layer.defaultProps = {}

export default Layer
