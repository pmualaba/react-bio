import React from 'react'
import hooks from '../../../../package.core.fn/hooks'
import IconElementStyled from './styled'

export default function IconElement(props) {
    /**
     * Data
     */

    const [data, selectors] = hooks.elements.useDataSelectors(props, ['src', 'alt', 'caption'])

    /**
     * Render
     */

    console.log(`RENDER ELEMENT: IconElement ${props.meta['@dna']}`, props)
    return (
        <IconElementStyled
            meta={props.meta}
            dna={props.dna}
            context={props.context}
            style={props.dna.ui['theme.style.css']}
        >
            <img src={data.src} alt={data.alt} />
            <figcaption>{data.caption}</figcaption>
        </IconElementStyled>
    )
}

IconElement.defaultProps = {
    dna: {
        set: {},
        ui: {},
        actions: {}
    }
}
