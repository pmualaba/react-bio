/**
 * Configure Server Environment
 *
 * Usage:
 *      const domains = require('../../env.server').domains
 *      const env = require('../../env.server')()
 *      env.DB_BASE_URL
 */

const env = require('./dna/rna/registry.environment')

const environment = () => {
    switch (process.env.NODE_ENV) {
        case 'production':
            return {
                BASE_URL:
                    (typeof window !== 'undefined' && window.location.origin) ||
                    'http://localhost:3000',
                DB_NAME: 'json',
                DB_BASE_URL: '',
                DB_USER: '',
                DB_PASSWORD: '',
                WS_ENABLED: env.flags.WEB_SOCKETS_ENABLED
            }
        case 'development':
            if (process.env.NODE_SERVER === 'local') {
                return {
                    BASE_URL: 'http://localhost:3000',
                    DB_BASE_URL: '',
                    DB_USER: '',
                    DB_PASSWORD: '',
                    WS_ENABLED: env.flags.WEB_SOCKETS_ENABLED
                }
            }
            return {
                BASE_URL: 'http://localhost:3000',
                DB_BASE_URL: '',
                DB_USER: '',
                DB_PASSWORD: '',
                WS_ENABLED: env.flags.WEB_SOCKETS_ENABLED
            }
        default:
            return {
                BASE_URL: ''
            }
    }
}
environment.eid = '101'
environment.domainName = env.domains.default.split('//')[1]
environment.changelog = {}
environment.schedulers = {
    backup: {
        cron: '0    0    4   *    *    *',
        config: {}
    }
}
environment.connectors = {
    elasticsearch: {},
    firebase: {}
}

/**
 * Domains
 */
environment.domains = env.domains

/**
 * locale
 */
environment.locales = env.locales

module.exports = environment
