import React from 'react'
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
            style={props.dna.ui && props.dna.ui['theme.style.css']}
        >
            {props[props.blocks ? 'blocks' : 'layouts'].map(component => {
                const RegionChildComponent = get(components, component.meta['@component'])

                !component.genes &&
                    console.log(
                        `Bio Debug Message: Missing dna entry in Master DNA for component ${component.meta['@dna']}`
                    )
                const data = Object.entries(
                    component.genes.data ? component.genes.data.accessors : {}
                ).reduce(
                    (d, [key, accessor]) => {
                        d.init[key] = get(props.data.init, accessor)
                        return d
                    },
                    {init: {}}
                )
                console.log('RENDER REGION CHILD: ', `${props.name}:${component.meta.name}`)
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

export default Region
