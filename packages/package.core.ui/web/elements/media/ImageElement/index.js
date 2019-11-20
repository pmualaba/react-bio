import React from 'react'
import ImageElementStyled from './styled'

/**
 * Component
 */

export default function ImageElement(props) {
    const data = props.data.current || props.data.init || props.data
    console.log('ImageElement props', props)

    console.log(`RENDER ELEMENT: ImageElement ${props.meta['@dna']}`)
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
