import React from 'react'
import hooks from '../../../../package.core.fn/hooks'
import IconElement from '../IconElement'
import ButtonElementStyled from './styled'

export default function ButtonElement(props) {
    const {dna, meta, context} = props
    /**
     * Default Props
     */

    // prettier-ignore
    if (!dna.ui) { dna.ui = {} }

    /**
     * Data
     */

    const [data, selectors] = hooks.elements.useDataSelectors(props, ['src', 'alt', 'caption'])

    /**
     * IconElement__icon
     */
    const bio = {}
    bio.IconElement__icon = {
        meta: {
            '@dna': `${meta['@dna']}.elements[0:IconElement__icon]`,
            '@component': "['package.core.ui'].web.elements.IconElement",
            name: 'IconElement__icon',
            class: 'IconElement',
            kind: 'element'
        },
        data: {
            init: {
                icon: dna.set.icon
            }
        },
        context
    }

    /**
     * Render
     */

    console.log(`RENDER ELEMENT: ButtonElement ${meta['@dna']}`, props)
    return (
        <ButtonElementStyled
            meta={meta}
            dna={dna}
            context={context}
            style={dna.ui['theme.style.css']}
        >
            {dna.set.icon && <IconElement {...bio.IconElement__icon} />}
            <span
                className="ButtonElement__label"
                dangerouslySetInnerHTML={{__html: dna.set.label}}
            />
        </ButtonElementStyled>
    )
}

ButtonElement.defaultProps = {
    dna: {
        set: {},
        ui: {},
        actions: {}
    }
}
