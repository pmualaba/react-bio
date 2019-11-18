import React from 'react'
import ImageElementStyled from './styled'

/**
 * Component
 */

export default function ImageElement(props) {
    const data = props.data.value || props.data.init

    return (
        <ImageElementStyled
            meta={props.meta}
            dna={props.dna}
            context={props.context}
            style={props.dna.ui['theme.style.css']}
        >
            <img src={data.src} alt={data.alt} />
            <figcaption>{data.caption}</figcaption>
        </ImageElementStyled>
    )
}
