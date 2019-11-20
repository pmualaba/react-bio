import React, {useRef, useReducer, memo} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {get} from 'lodash'

/**
 * Reducer
 */
function reducer(state, [type, payload]) {
    switch (type) {
        case 'ON_CHANGE':
            return {...state, user: payload}
        case 'ON_RESET':
            return {...state, value: ''}
        default:
            return state
    }
}

function Cell(props) {
    const [state, dispatch] = useReducer(reducer, {})

    const store = useSelector(
        store =>
            Object.entries(props.dna.data.selectors).reduce((selectors, [key, value]) => {
                selectors[key] = get(store, value)
                return selectors
            }, {}),
        shallowEqual
    )

    console.log('CELL STORE', store)

    /**
     * Block Override
     */
    function onKeyUp(payload) {
        console.log('LOG', payload)
        props.fn.onKeyUp(payload)
    }

    const children = props.children.map((child, i) => {
        console.log('Child', child)

        return React.cloneElement(child, {
            key: child.props.meta['@dna'],
            data: {
                ...child.props.data.init,
                ...Object.entries(store).reduce((data, [key, value]) => {
                    if (key.startsWith(child.props.meta.name && value)) {
                        data[key.split('.')[1]] = value
                    }
                    return data
                }, {})
            },
            fn: {
                ...child.props.fn,
                onKeyUp
            }
        })
    })

    console.log('RENDER CELL')

    return children
}

export default Cell
