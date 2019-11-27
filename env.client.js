/**
 * Configure Browser Environment
 *
 * Usage:
 *      const env = require('../../../env.client')()
 *      env.BASE_URL
 */

import {locales, flags, domains} from './dna/rna/registry.environment'

const environment = () => {
    switch (process.env.NODE_ENV) {
        case 'production':
            return {
                BASE_URL:
                    (typeof window !== 'undefined' && window.location.origin) ||
                    'http://localhost:3000',
                DOMAIN_URL: domains.default,
                WS_ENABLED: flags.WEB_SOCKETS_ENABLED
            }
        case 'development':
            if (process.env.NODE_SERVER === 'local') {
                return {
                    BASE_URL: 'http://localhost:3000',
                    DOMAIN_URL: domains.default,
                    WS_ENABLED: flags.WEB_SOCKETS_ENABLED
                }
            }
            return {
                BASE_URL: 'http://localhost:3000',
                DOMAIN_URL: domains.default,
                WS_ENABLED: flags.WEB_SOCKETS_ENABLED
            }
        default:
            return {
                BASE_URL: 'http://localhost:3000',
                DOMAIN_URL: domains.default,
                WS_ENABLED: flags.WEB_SOCKETS_ENABLED
            }
    }
}

/**
 * locale
 */
environment.locales = locales

module.exports = environment
