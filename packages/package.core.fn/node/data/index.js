const fs = require('fs')

/**
 * objectify Array
 */

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
        acc[cur.role || cur.id].hasChildContentNodes =
            (Array.isArray(cur.hasChildContentNodes) && objectify(cur.hasChildContentNodes)) || []
        return acc
    }, {})
}

/**
 * base64Encode File
 */

function base64Encode(filePath) {
    var file = fs.readFileSync(filePath)
    return new Buffer(file).toString('base64')
}

/**
 * getDepthOfTree
 */

function getDepthOfTree(rootObject, childrenKey) {
    let depth = 0
    if (rootObject[childrenKey]) {
        rootObject[childrenKey].forEach(d => {
            const tmpDepth = getDepthOfTree(d, childrenKey)
            if (tmpDepth > depth) {
                depth = tmpDepth
            }
        })
    }
    return 1 + depth
}

/**
 * Data Transformations
 */

const Transform = {
    mapContentNodeTreeToDnaNodeTree(page) {
        console.time('TRANSFORM DATA - Transform function...')
        page.hasChildContentNodes =
            (Array.isArray(page.hasChildContentNodes) && objectify(page.hasChildContentNodes)) || []
        console.timeEnd('TRANSFORM DATA - Transform function...')
        console.log('Transform PAGE')
        // console.dir(page, {depth: null, color: true})
        return page
    }
}

module.exports = {
    Transform,
    getDepthOfTree,
    base64Encode,
    objectify
}
