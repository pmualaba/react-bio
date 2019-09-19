/*
const fs = require('fs')

module.exports = {
    // ui helper functions
    ui: {
        bar: () => null
    },
    // db helper functions
    db: {
        getDepthOfTree: function getDepthOfTree(rootObject, childrenKey) {
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
        },
        getPropertyFromRelation: function getPropertyFromRelation(relation, property) {
            return relation ? relation[property] : null
        },
        base64Encode: function base64Encode(filePath) {
            // read binary data
            var file = fs.readFileSync(filePath)
            // convert binary data to base64 encoded string
            return new Buffer(file).toString('base64')
        }
    }
}
*/
