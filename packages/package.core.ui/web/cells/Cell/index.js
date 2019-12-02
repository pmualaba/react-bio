import React, {useRef, useReducer, memo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {get} from 'lodash'
import {storeEquality} from '../../../../package.core.fn/data'

/**
 * Actions
 */
export const ON_KEY_UP = 'ON_KEY_UP'
export const ON_CELL_UPDATE = 'ON_CELL_UPDATE'

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

function Cell(props) {
    /**
     * Default Props
     */

    // prettier-ignore
    if (!props.fn.onValueUpdate) { props.fn.onValueUpdate = () => {} }
    // prettier-ignore
    if (!props.fn.onKeyUp) { props.fn.onKeyUp = () => {} }

    /**
     * Data
     */

    const [state, dispatch] = useReducer(reducer, {})
    /* dispatch(['on_change', payload.value]) */
    const store = useSelector(
        store =>
            Object.entries(props.dna.data.selectors).reduce((selectors, [key, value]) => {
                const keys = key.split('.')
                selectors[keys[0]] = {[keys[1]]: get(store, value)}
                return selectors
            }, {}),
        storeEquality
    )
    const dispatchStore = useDispatch()

    /**
     * Intercept Element Actions
     */

    function onKeyUp(payload) {
        payload.data.selector = props.dna.data.selectors[payload.data.selector]
        dispatchStore({
            type: ON_KEY_UP,
            error: false,
            payload,
            meta: {
                ...props.meta
            }
        })
        props.fn.onKeyUp(payload)
    }

    function onValueUpdate(payload) {
        payload.data.selector = props.dna.data.selectors[payload.data.selector]
        dispatchStore({
            type: ON_CELL_UPDATE,
            error: false,
            payload,
            meta: props.meta
        })
        props.fn.onValueUpdate(payload)
    }

    /**
     * Render
     */

    const children = React.Children.map(props.children, (child, i) =>
        React.cloneElement(child, {
            key: child.props.meta['@dna'],
            meta: {
                ...child.props.meta,
                '@flag.controlled': true,
                '@flag.valid': true,
                '@flag.required': false
            },
            data: {
                init: {...child.props.data.init},
                store: {...store[child.props.meta.name]}
            },
            fn: {
                ...child.props.fn,
                onKeyUp,
                onValueUpdate
            }
        })
    )

    console.log('RENDER CELL', store, props)
    return children
}

export default Cell

Cell.defaultProps = {
    fn: {
        onKeyUp: () => {},
        onValueUpdate: () => {}
    }
}
