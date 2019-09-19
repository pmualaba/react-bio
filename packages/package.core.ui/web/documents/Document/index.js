/**
 *  Dependencies
 */

import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import theme from '../../../../../theme/web/theme'

/**
 * Components
 */

import Layer from './Layer'

/**
 * Styled Component
 */

const DocumentStyled = styled('document').attrs(props => ({
    'data-kind': 'document',
    'data-component': `${props.meta.class}`,
    'data-registry': `${props.meta['@registry']}`,
    'data-dna': `${props.meta['@dna']}`,
    style: props.dna.ui.theme.finish.style,
    className: `${props.meta.class} ${props.dna.ui.theme.finish.class ? props.dna.ui.theme.finish.class : ''}`
}))`
    ${props => props.theme.CSS(props)};

    height: ${props => (props.dna.set.viewport === 'viewport' ? '100vh' : '100%')};
    width: ${props => (props.dna.set.viewport === 'viewport' ? '100vw' : '100%')};
    overflow: ${props => (props.dna.set.viewport === 'viewport' ? 'hidden' : 'scroll')};
`
DocumentStyled.defaultProps = {}

/**
 * Component
 */

export default function Document(props) {
    useEffect(() => {
        console.log('Global componentDidMount()')

        return () => {}
    }, [])

    /**
     * Render
     */

    console.log('RENDER DOCUMENT')
    return (
        <DocumentStyled meta={props.meta} dna={props.dna} own={{global: props.global}}>
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
