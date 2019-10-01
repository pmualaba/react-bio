import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import registry from '../../../../../dna/registry.web'
import {get} from 'lodash'
import {GlobalContext} from '../../global/Global'

const RenderLayout = props => {
    const context = useContext(GlobalContext)
    const LayoutComponent = get(registry, props.meta['@component'].replace('RenderLayout', props.dna.set.renderLayout))
    return <LayoutComponent meta={props.meta} dna={props.dna} context={context} />
}

RenderLayout.propTypes = {
    meta: PropTypes.object,
    dna: PropTypes.object
}

export default RenderLayout
