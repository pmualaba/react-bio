export default function(props, keys) {
    if (!props.data.store) {
        props.data.store = {}
    }
    const data = {}
    const selectors = {}

    keys.forEach(key => {
        data[key] = props.data.store[key] || props.data.init[key]
        selectors[key] = `${props.meta.name}.${key}`
    })

    return [data, selectors]
}
