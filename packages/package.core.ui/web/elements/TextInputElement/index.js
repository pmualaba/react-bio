import React from 'react'
import TextInputElementStyled from './styled'
import {hooks} from '../../../../package.core.fn'

/**
 * Reducer
 */

function reducer(state, [type, payload]) {
    switch (type) {
        case 'on_change':
            return {...state, value: payload}
        case 'on_reset':
            return {...state, value: ''}
        default:
            return state
    }
}

export default function TextInputElement(props) {
    const dna = props.dna

    /**
     * Bio Default Props
     */

    !dna &&
        console.log(
            `Bio Debug Message: Missing bio.dna property for TextInputElement: ${props.meta['@dna']}`
        )

    // prettier-ignore
    if (!dna.ui) { dna.ui = {} }
    // prettier-ignore
    if (!props.fn.onValueUpdate) { props.fn.onValueUpdate = () => {} }
    // prettier-ignore
    if (!props.fn.onKeyUp) { props.fn.onKeyUp = () => {} }

    /**
     * Data
     */

    const [data, selectors, dispatch] = hooks.elements.useDataSelectors(
        props,
        ['placeholder', 'value'],
        reducer
    )

    /**
     * Render
     */
    const {css, motion} = props.context.theme.render(props)
    console.log(`RENDER ELEMENT: TextInputElement ${props.meta['@dna']}`, props)
    return (
        <TextInputElementStyled
            meta={props.meta}
            dna={dna}
            context={props.context}
            css={css}
            {...motion}
            style={dna.ui['theme.style.css']}
        >
            <input
                type="text"
                id={dna.set.name}
                autoComplete={dna.set.autocomplete}
                placeholder={data.placeholder}
                value={data.value}
                onChange={e => {
                    dispatch(['on_change', e.target.value])
                    props.fn.onKeyUp({
                        meta: props.meta,
                        data: {
                            value: e.target.value,
                            selector: selectors.value
                        }
                    })
                }}
                onBlur={e =>
                    props.fn.onValueUpdate({
                        meta: props.meta,
                        data: {
                            value: e.target.value,
                            selector: selectors.value
                        }
                    })
                }
                required={props.meta['@flag.required']}
            />
            <label htmlFor={dna.set.name}>
                <span>{dna.set.label}</span>
            </label>
        </TextInputElementStyled>
    )
}

TextInputElement.defaultProps = {
    fn: {
        onKeyUp() {},
        onValueUpdate() {}
    }
}
