/** Functions API for package.core.authentication */

const {getSharedSecretCredentials} = require('./config')

/** @function getLocalApiCredentials
 *  Generate a shared secret to authenticate internal private API calls.
 *  uuid.v4() or https://www.uuidgenerator.net/ can be used to generate random GUID strings
 *  @return {object} - The credentials object.
 */
function getLocalApiCredentials() {
    return getSharedSecretCredentials()
}

module.exports = {
    getLocalApiCredentials
}
