import React from 'react'
import PositionLayoutStyled from './styled'
import Region from '../Region'

function PositionLayout(props) {
    const {css, motion} = props.context.theme.render(props)

    return (
        <PositionLayoutStyled
            meta={props.meta}
            dna={props.dna}
            context={props.context}
            data={{regionCount: props.regions.length}}
            css={css}
            {...motion}
            style={props.dna.ui['theme.style.css']}
        >
            {props.regions.map((region, i) => (
                <Region
                    key={region.meta.name}
                    name={region.meta.name}
                    meta={region.meta}
                    dna={region.genes}
                    data={{init: props.data.init.regions[i]}}
                    context={props.context}
                    blocks={region.blocks}
                    layouts={region.layouts}
                />
            ))}
        </PositionLayoutStyled>
    )
}

export default PositionLayout
