import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import components from '../../../../../dna/rna/registry.components.web'
import RegionStyled from './styled'

function Region(props) {
    return (
        <RegionStyled
            meta={props.meta}
            dna={props.dna}
            context={props.context}
            blocks={props.blocks}
            layouts={props.layouts}
        >
            {props[props.blocks ? 'blocks' : 'layouts'].map(component => {
                const RegionChildComponent = get(components, component.meta['@component'])
                const data = Object.entries(
                    component.genes.data ? component.genes.data.accessors : {}
                ).reduce(
                    (d, [key, accessor]) => {
                        d.init[key] = get(props.data.init, accessor)
                        return d
                    },
                    {init: {}}
                )
                console.log('RegionChildComponent', `${props.name}:${component.meta.name}`)
                return RegionChildComponent ? (
                    <RegionChildComponent
                        key={`${props.name}:${component.meta.name}`}
                        meta={component.meta}
                        dna={component.genes}
                        context={props.context}
                        data={data}
                    />
                ) : (
                    <React.Fragment key={`${props.name}:${component.meta.name}`} />
                )
            })}
        </RegionStyled>
    )
}

Region.propTypes = {
    meta: PropTypes.object,
    dna: PropTypes.object,
    data: PropTypes.object,
    context: PropTypes.object,
    blocks: PropTypes.array,
    layouts: PropTypes.array
}

export default Region
