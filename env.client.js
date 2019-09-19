/**
 * Configure Browser Environment
 *
 * Usage:
 *      const env = require('../../../env.client')()
 *      env.BASE_URL
 */
const WS_ENABLED = false
const environment = () => {
    switch (process.env.NODE_ENV) {
        case 'production':
            return {
                BASE_URL: (typeof window !== 'undefined' && window.location.origin) || 'http://localhost:3000',
                DOMAIN_URL: 'https://my-react-app.be',
                WS_ENABLED
            }
        case 'development':
            if (process.env.NODE_SERVER === 'local') {
                return {
                    BASE_URL: 'http://localhost:3000',
                    DOMAIN_URL: 'https://my-react-app.be',
                    WS_ENABLED
                }
            }
            return {
                BASE_URL: 'http://localhost:3000',
                DOMAIN_URL: 'https://my-react-app.be',
                WS_ENABLED
            }
        default:
            return {
                BASE_URL: 'http://localhost:3000',
                DOMAIN_URL: 'https://my-react-app.be',
                WS_ENABLED
            }
    }
}

module.exports = environment
