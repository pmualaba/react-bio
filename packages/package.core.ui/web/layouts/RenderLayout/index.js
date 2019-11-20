import React, {useContext} from 'react'
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

    const values = props.regions.map(region =>
        Object.entries(region.genes.data.accessors).reduce(
            (value, [key, accessor]) => {
                value.region[key] = get(props.data.init, accessor)
                return value
            },
            {region: {}}
        )
    )

    const LayoutComponent = get(
        components,
        props.meta['@component'].replace('RenderLayout', props.meta['@layout'])
    )

    !LayoutComponent &&
        console.log(
            `Bio Debug Message: LayoutComponent ${props.meta['@layout']} not Registered in RNA`
        )
    console.log('RENDER LAYOUT:', props.meta['@layout'])
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

export default RenderLayout
