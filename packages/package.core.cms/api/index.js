const express = require('express')

const logic = {
    '/api/package.core.cms/app': require('./api-app').logic,
    '/api/package.core.cms/web': require('./api-web').logic
}

const router = express.Router()
router.use('/api/package.core.cms/app', require('./api-app').router)
router.use('/api/package.core.cms/web', require('./api-web').router)

module.exports = {router, logic}
