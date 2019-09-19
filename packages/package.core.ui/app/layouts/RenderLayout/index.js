import React from 'react'
import PropTypes from 'prop-types'
import registry from '../../../../../dna/registry.app'
import {get} from 'lodash/get'

const RenderLayout = props => {
    const LayoutComponent = get(registry, props.dna.meta['@layoutComponent'].replace('RenderLayout', props.dna.meta.componentProps.renderLayout))
    return <LayoutComponent dna={props.dna} />
}

RenderLayout.propTypes = {
    dna: PropTypes.object.isRequired
}

RenderLayout.defaultProps = {}

export default RenderLayout
