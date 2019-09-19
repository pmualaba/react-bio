import React from 'react'
import PropTypes from 'prop-types'
import registry from '../../../../../dna/registry.web'
import {get} from 'lodash'

const RenderLayout = props => {
    const LayoutComponent = get(registry, props.meta['@registry'].replace('RenderLayout', props.dna.set.renderLayout))
    return <LayoutComponent meta={props.meta} dna={props.dna} />
}

RenderLayout.propTypes = {
    meta: PropTypes.object,
    dna: PropTypes.object
}

export default RenderLayout
