module.exports = {
    flags: {
        WEB_SOCKETS_ENABLED: false
    },
    locale: {
        default: 'nl_BE',
        nl: 'nl_BE',
        fr: 'fr_FR',
        en: 'en_GB'
    },
    domains: {
        default: 'https://my-react-bio-app.org',
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
}
