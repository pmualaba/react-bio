const express = require('express')

const logic = {
    '/api/cms/app': require('./api-app').logic,
    '/api/cms/web': require('./api-web').logic
}

const router = express.Router()
router.use('/api/cms/app', require('./api-app').router)
router.use('/api/cms/web', require('./api-web').router)

module.exports = {router, logic}
