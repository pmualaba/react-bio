import React, {useReducer} from 'react'
import TextInputElementStyled from './styled'

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

/**
 * Component
 */

export default function TextInputElement(props) {
    const selectors = {
        value: `${props.meta.name}.value`,
        placeholder: `${props.meta.name}.placeholder`
    }
    const data = {
        value: props.data[selectors.value].value || props.data.init.value
    }
    const [state, dispatch] = useReducer(reducer, data || {value: ''})

    console.log(`RENDER ELEMENT: TextInputElement ${props.meta['@dna']}`, props)
    return (
        <TextInputElementStyled
            meta={props.meta}
            dna={props.dna}
            context={props.context}
            style={props.dna.ui['theme.style.css']}
        >
            <input
                type="text"
                id={data.value}
                autoComplete={data.autocomplete}
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
            />
            <label htmlFor={data.name}>
                <span>{data.label || 'Label: '}</span>
            </label>
        </TextInputElementStyled>
    )
}
