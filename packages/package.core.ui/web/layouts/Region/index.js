import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import get from 'lodash/get'
import registry from '../../../../../dna/registry.web'

const RegionStyled = styled.div.attrs(props => ({
    'data-kind': 'region',
    'data-component': `Region:${props.meta.name}`,
    'data-registry': "['package.core.ui'].web.layouts.Region",
    'data-dna': `${props.meta['@dna']}`,
    className: `Region ${props.meta.name} ${props.dna.ui && props.dna.ui.theme.decorateClass ? props.dna.ui.theme.decorateClass : ''}`,
    style: props.dna.ui && props.dna.ui.theme.decorateStyle
}))``

function Region(props) {
    console.log('REGION props')

    return (
        <RegionStyled meta={props.meta} dna={props.dna} context={props.context} blocks={props.blocks} layouts={props.layouts}>
            {props[props.blocks ? 'blocks' : 'layouts'].map(component => {
                const RegionChildComponent = get(registry, component.meta['@component'])
                const data = Object.entries(component.genes.data ? component.genes.data.accessors : {}).reduce(
                    (d, [key, accessor]) => {
                        d.init[key] = get(props.data.init, accessor)
                        return d
                    },
                    {init: {}}
                )
                return <RegionChildComponent key={`${props.name}:${component.meta.name}`} meta={component.meta} data={data} />
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
