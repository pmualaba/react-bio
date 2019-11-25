const API = require('./node/api')
const {Transform, getDepthOfTree, base64Encode, objectify} = require('./node/data')
const {ERR_JOI, ERR_NODEJS} = require('./errors')

module.exports = {
    api: {
        API
    },
    data: {
        Transform
    },
    utils: {},
    errors: {
        ERR_JOI,
        ERR_NODEJS
    }
}
