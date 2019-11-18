import React from 'react'
import TextInputElementStyled from './styled'

/**
 * Component
 */

export default function TextInputElement(props) {
    const data = props.data.value || props.data.init

    return (
        <TextInputElementStyled
            meta={props.meta}
            dna={props.dna}
            context={props.context}
            style={props.dna.ui['theme.style.css']}
        >
            <input
                type="text"
                id={data.name}
                autoComplete={data.autocomplete}
                placeholder={data.placeholder}
                onChange={props.fn.onKeyUp}
                onBlur={props.fn.onValueUpdate}
            />
            <label htmlFor={data.name}>
                <span>{data.label}</span>
            </label>
        </TextInputElementStyled>
    )
}
