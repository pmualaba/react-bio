import React from 'react'
import BackgroundElementStyled from './styled'

export default function BackgroundElement(props) {
    const {dna, meta, context} = props
    /**
     * Bio Default Props
     */

    /**
     * Data
     */

    /**
     * Render
     */

    const {css, motion} = props.context.theme.render(props)

    console.log(`RENDER ELEMENT: BackgroundElement ${meta['@dna']}`)
    return (
        <BackgroundElementStyled
            meta={meta}
            dna={dna}
            data={props.data.init}
            context={context}
            css={css}
            {...motion}
            style={dna.ui['theme.style.css']}
        />
    )
}

BackgroundElement.defaultProps = {
    dna: {
        set: {
            icon: '',
            label: ''
        },
        ui: {},
        actions: {}
    }
}
