const express = require('express')

const logic = {
    '/api/package.core.ui/web': require('./api-web').logic
}

const router = express.Router()
router.use('/api/package.core.ui/web', require('./api-web').router)

module.exports = {router, logic}
