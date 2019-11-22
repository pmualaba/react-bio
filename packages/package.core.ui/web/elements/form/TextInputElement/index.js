import React, {useReducer} from 'react'
import TextInputElementStyled from './styled'
import hooks from '../../../../../package.core.fn/hooks'

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
    /**
     * Default Props
     */

    if (!props.fn.onKeyUp) {
        props.fn.onKeyUp = () => {}
    }
    if (!props.fn.onValueUpdate) {
        props.fn.onValueUpdate = () => {}
    }

    /**
     * Data Management
     */

    const [data, selectors] = hooks.elements.useDataSelectors(props, ['value'])
    const [state, dispatch] = useReducer(reducer, data || {value: ''})

    /**
     * Render Element
     */

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
                value={data.value || state.value}
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

TextInputElement.defaultProps = {
    dna: {
        set: {},
        ui: {},
        actions: {}
    },
    fn: {
        onKeyUp: () => {},
        onValueUpdate: () => {}
    }
}
