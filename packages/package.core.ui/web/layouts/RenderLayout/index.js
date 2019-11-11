import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {get} from 'lodash'
import components from '../../../../../dna/rna/registry.components.web'
import {GlobalContext} from '../../global/Global'

const RenderLayout = props => {
    /**
     * Hooks
     */

    const context = useContext(GlobalContext)

    /**
     * Render
     */

    const values = props.regions.map(region => {
        console.log('region', region)
        return Object.entries(region.genes.data.accessors).reduce(
            (value, [key, accessor]) => {
                value.region[key] = get(props.data.init, accessor)
                return value
            },
            {region: {}}
        )
    })

    const LayoutComponent = get(
        components,
        props.meta['@component'].replace('RenderLayout', props.dna.set.renderLayout)
    )
    console.log('RENDER LAYOUT:', props.dna.set.renderLayout)
    return (
        <LayoutComponent
            meta={props.meta}
            dna={props.dna}
            data={{init: {regions: values}}}
            context={context}
            regions={props.regions}
        />
    )
}

RenderLayout.propTypes = {
    meta: PropTypes.object,
    dna: PropTypes.object,
    data: PropTypes.object,
    regions: PropTypes.array
}

export default RenderLayout
