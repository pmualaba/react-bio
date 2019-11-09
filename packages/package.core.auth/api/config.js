/** Configuration for package.core.authentication */

/** @State  server/data/identities.js
 *
 *      JSON list of identities to authenticate.
 *
 */

/** @function getConfigAuthenticatedRedirectUrl
 *  Generate the Redirection URL after successful authentication.
 *  @param {object} res - Response object returned from POST /api/identities/authenticate.
 *                      - the Response object is passed to the function, but is not mandatory to use
 *                        it in the function body as long as a valid URL sting is returned.
 *                      - Response object shape:
 *                      {
 *                         success: true,
 *                         message: 'token',
 *                         token: token,
 *                         identityName: authenticatingIdentity.name
 *                      }
 *  @return {string} - The Redirection URL string
 */
function getConfigAuthenticatedRedirectUrl(res) {
    return `/${res.data.identityName}`
}

/** @function getConfigJwtTokenCookieExpiration
 *  Generate a Cookie expiration timout for the JWT Token Cookie in seconds.
 *  @return {number} - The expiration timout for the JWT Token Cookie in seconds.
 */
function getConfigJwtTokenCookieExpiration() {
    return 60 * 60 * 8
}

/** @function getConfigJwtTokenExpiration
 *  Generate a JWT Token expiration timout for the the JWT Token in seconds.
 *  @return {number} - The expiration timout for the JWT Token in seconds.
 */
function getConfigJwtTokenExpiration() {
    return 60 * 60 * 8
}

/** @function getConfigSecretSigningKey
 *  Generate a Secret Key for signing JWT Tokens.
 *  uuid.v4() or https://www.uuidgenerator.net/ can be used to generate random GUID strings
 *  @return {string} - The secret string.
 */
function getConfigSecretSigningKey() {
    return '096c449b-98c7-4660-b14d-a959d7abfdf5'
}

/** @function getSharedSecretCredentials
 *  Generate a shared secret to authenticate internal private API calls.
 *  uuid.v4() or https://www.uuidgenerator.net/ can be used to generate random GUID strings
 *  @return {object} - The credentials object.
 */
function getSharedSecretCredentials() {
    return {
        identity: '336b918e-d69f-464f-8fe5-d0d7a377cc96',
        secret: 'c91a18c9-fe17-47d9-a424-1dc31a0bc03d'
    }
}
module.exports = {
    getConfigAuthenticatedRedirectUrl,
    getConfigJwtTokenCookieExpiration,
    getConfigJwtTokenExpiration,
    getConfigSecretSigningKey,
    getSharedSecretCredentials
}
