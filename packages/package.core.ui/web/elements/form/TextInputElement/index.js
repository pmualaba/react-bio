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
    const data = props.data.store || props.data.init

    console.log('DATA', data)
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
                id={data.name}
                autoComplete={data.autocomplete}
                placeholder={data.placeholder}
                value={data.value || state.value || data['TextInputElement__user.value'].value}
                onChange={e => {
                    dispatch(['on_change', e.target.value])
                    props.fn.onKeyUp({
                        meta: props.meta,
                        value: e.target.value
                    })
                }}
                onBlur={e =>
                    props.fn.onValueUpdate({
                        meta: props.meta,
                        value: e.target.value
                    })
                }
            />
            <label htmlFor={data.name}>
                <span>{data.label || 'Label: '}</span>
            </label>
        </TextInputElementStyled>
    )
}
