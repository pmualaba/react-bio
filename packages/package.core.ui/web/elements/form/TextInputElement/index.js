import React, {useReducer} from 'react'
import TextInputElementStyled from './styled'

/**
 * Reducer
 */
function reducer(state, [type, payload]) {
    switch (type) {
        case 'ON_CHANGE':
            return {...state, value: payload}
        case 'ON_RESET':
            return {...state, value: ''}
        default:
            return state
    }
}

/**
 * Component
 */

export default function TextInputElement(props) {
    const data = props.data.current || props.data.init || props.data
    console.log('TextInputElement props', props)
    const [state, dispatch] = useReducer(reducer, {value: data.value || ''})

    console.log(`RENDER ELEMENT: TextInputElement ${props.meta['@dna']}`)
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
                value={data.value}
                onChange={e => {
                    dispatch(['ON_CHANGE', e.target.value])
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
