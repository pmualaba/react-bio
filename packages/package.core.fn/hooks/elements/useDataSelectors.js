import React, {useReducer} from 'react'

export default function(props, keys, reducer) {
    /**
     * Data
     */

    !props.data &&
        console.log(
            'Bio Debug Message: Missing bio configuration object for Element component. Check parent Block/Element.'
        )
    if (!props.data.store) {
        props.data.store = {}
    }
    const data = {}
    const selectors = {}

    keys.forEach(key => {
        data[key] = props.data.store[key] || props.data.init[key]
        selectors[key] = `${props.meta.name}.${key}`
    })

    if (reducer) {
        const [state, dispatch] = useReducer(reducer, data)
        const _data = props.meta['@flag.controlled'] ? data : state
        return [_data, selectors, dispatch]
    }

    return [data, selectors]
}
