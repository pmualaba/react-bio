function objectify(array) {
    return array.reduce((acc, cur) => {
        acc[cur.role || cur.id] = cur
        cur.isExtendByFieldGroups =
            (Array.isArray(cur.isExtendByFieldGroups) &&
                cur.isExtendByFieldGroups.reduce((acc, cur) => {
                    acc[cur.role || cur.id] = cur
                    return acc
                }, {})) ||
            []
        acc[cur.role || cur.id].hasChildContentNodes = (Array.isArray(cur.hasChildContentNodes) && objectify(cur.hasChildContentNodes)) || []
        return acc
    }, {})
}

const Transform = {
    mapContentNodeTreeToDnaNodeTree: function(page) {
        console.time('TRANSFORM DATA - Transform function...')
        page.hasChildContentNodes = (Array.isArray(page.hasChildContentNodes) && objectify(page.hasChildContentNodes)) || []
        console.timeEnd('TRANSFORM DATA - Transform function...')
        console.log('Transform PAGE')
        console.dir(page, {depth: null, color: true})
        return page
    }
}

module.exports = Transform
