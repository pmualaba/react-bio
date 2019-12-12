import React from 'react'
import {hooks} from '../../../../package.core.fn'
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
     * Hooks
     */

    function useRipple(e) {
        // props.fn.onClick()

        const btn = e.currentTarget
        const x = -100
        const y = -10
        const duration = 1000

        let animationFrame
        let animationStart

        function animationStep(timestamp) {
            if (!animationStart) {
                animationStart = timestamp
            }

            const frame = timestamp - animationStart
            if (frame < duration) {
                const easing = (frame / duration) * (2 - frame / duration)
                const stop = 90 * easing

                btn.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, ${0.3 *
                    (1 - easing)}) ${stop}%, transparent ${stop}%)`

                animationFrame = window.requestAnimationFrame(animationStep)
            } else {
                btn.style.backgroundImage =
                    'linear-gradient(90deg, rgb(201, 247, 243), rgb(245, 245, 245))'
                window.cancelAnimationFrame(animationFrame)
            }
        }
        animationFrame = window.requestAnimationFrame(animationStep)
    }

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
            type="button"
            onClick={props.fn.onClick}
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
        set: {
            icon: '',
            label: ''
        },
        ui: {},
        actions: {}
    }
}
