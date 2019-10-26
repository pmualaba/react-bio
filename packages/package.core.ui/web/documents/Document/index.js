/**
 *  Dependencies
 */

import React, {useEffect, useContext} from 'react'
import PropTypes from 'prop-types'

/**
 * Components
 */

import Layer from './Layer'
import DocumentStyled from './styled'

/**
 * Context
 */

import {GlobalContext} from '../../global/Global'

/**
 * Component
 */

export default function Document(props) {
    /**
     * Hooks
     */
    const context = useContext(GlobalContext)

    useEffect(() => {}, [])

    /**
     * Render
     */

    if (context.renderCycle === 0) {
        return <></>
    }
    console.log('RENDER DOCUMENT  ')
    return (
        <DocumentStyled
            meta={props.meta}
            dna={props.dna}
            context={context}
            style={props.dna.ui['theme.decorate.style']}
        >
            <Layer id="layout">{props.children}</Layer>
            <Layer id="modal" modals={{}} />
            <Layer id="takeover" takeovers={{}} />
            <Layer id="notification" notifications={{}} />
            <Layer id="dom" />
        </DocumentStyled>
    )
}

Document.propTypes = {
    meta: PropTypes.object,
    dna: PropTypes.object,
    global: PropTypes.object
}

Document.defaultProps = {}
