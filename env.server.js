/**
 * Configure Server Environment
 *
 * Usage:
 *      const domains = require('../../env.server').domains
 *      const env = require('../../env.server')()
 *      env.DB_BASE_URL
 */
const WS_ENABLED = true
const environment = () => {
    switch (process.env.NODE_ENV) {
        case 'production':
            return {
                BASE_URL: (typeof window !== 'undefined' && window.location.origin) || 'http://localhost:3000',
                DB_NAME: 'json',
                DB_BASE_URL: '',
                DB_USER: '',
                DB_PASSWORD: '',
                WS_ENABLED
            }
        case 'development':
            if (process.env.NODE_SERVER === 'local') {
                return {
                    BASE_URL: 'http://localhost:3000',
                    DB_BASE_URL: '',
                    DB_USER: '',
                    DB_PASSWORD: '',
                    WS_ENABLED
                }
            }
            return {
                BASE_URL: 'http://localhost:3000',
                DB_BASE_URL: '',
                DB_USER: '',
                DB_PASSWORD: '',
                WS_ENABLED
            }
        default:
            return {
                BASE_URL: ''
            }
    }
}
environment.id = '101'
environment.domainName = 'my-react-bio-app.org'
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
environment.domains = {
    'http://localhost:3000': {
        eid: '101',
        sid: '1999'
    },
    'http://my-react-bio-app.org': {
        eid: '101',
        sid: '1999'
    },
    'https://my-react-bio-app.org': {
        eid: '101',
        sid: '1999'
    }
}

/**
 * locale
 */
environment.locale = {
    nl: 'nl_NL',
    fr: 'fr_FR',
    en: 'en_GB',
    default: 'nl_NL'
}

module.exports = environment
