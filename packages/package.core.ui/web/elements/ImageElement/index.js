import React from 'react'
import {hooks} from '../../../../package.core.fn'
import ImageElementStyled from './styled'

export default function ImageElement(props) {
    /**
     * Bio Default Props
     */

    if (!props.dna.ui) {
        props.dna.ui = {}
    }

    /**
     * Data
     */

    const [data, selectors] = hooks.elements.useDataSelectors(props, ['src', 'alt', 'caption'])

    /**
     * Render
     */
    const {css, motion} = props.context.theme.render(props)

    console.log(`RENDER ELEMENT: ImageElement ${props.meta['@dna']}`, props, motion)
    return (
        <ImageElementStyled
            meta={props.meta}
            dna={props.dna}
            context={props.context}
            css={css}
            {...motion}
            style={props.dna.ui['theme.style.css']}
        >
            <img src={data.src} alt={data.alt} />
            <figcaption>{data.caption}</figcaption>
        </ImageElementStyled>
    )
}

ImageElement.defaultProps = {
    dna: {
        set: {},
        ui: {},
        actions: {}
    }
}
