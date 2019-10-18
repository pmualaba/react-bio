const express = require('express')

const logic = {
    '/api/package.apis.facebook/web': require('./api-web').logic
}

const router = express.Router()
router.use('/api/package.apis.facebook/web', require('./api-web').router)

module.exports = {router, logic}
