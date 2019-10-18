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
                DOMAIN_URL: 'https://my-react-bio-app.org',
                WS_ENABLED
            }
        case 'development':
            if (process.env.NODE_SERVER === 'local') {
                return {
                    BASE_URL: 'http://localhost:3000',
                    DOMAIN_URL: 'https://my-react-bio-app.org',
                    WS_ENABLED
                }
            }
            return {
                BASE_URL: 'http://localhost:3000',
                DOMAIN_URL: 'https://my-react-bio-app.org',
                WS_ENABLED
            }
        default:
            return {
                BASE_URL: 'http://localhost:3000',
                DOMAIN_URL: 'https://my-react-bio-app.org',
                WS_ENABLED
            }
    }
}

/**
 * locale
 *
 * Usage:
 *      const env = require('../../../../env.client')()
 *      const locale = require('../../../../env.client').locale
 */
environment.locale = {
    nl: 'nl_NL',
    fr: 'fr_FR',
    en: 'en_GB',
    default: 'nl_NL'
}

module.exports = environment
