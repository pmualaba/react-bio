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
import components from '../../../../../dna/rna/registry.components.web'

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
    console.log('RENDER DOCUMENT  ', props)
    console.log('RENDER DOCUMENT  ', context)

    const motion = {
        variants: {
            initial: {scale: 0.96, y: 30, opacity: 0},
            enter: {
                scale: 1,
                y: 0,
                opacity: 1,
                transition: {duration: 2, ease: [0.48, 0.15, 0.25, 0.96]}
            },
            exit: {
                scale: 0.6,
                y: 100,
                opacity: 0,
                transition: {duration: 2, ease: [0.48, 0.15, 0.25, 0.96]}
            }
        },
        as: components.motion.div,
        style: {
            ...props.dna.ui['theme.decorate.style']
        }
    }

    return (
        <DocumentStyled
            meta={props.meta}
            dna={props.dna}
            context={context}
            style={props.dna.ui['theme.decorate.style']}
            {...motion}
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
    dna: PropTypes.object
}

Document.defaultProps = {}
