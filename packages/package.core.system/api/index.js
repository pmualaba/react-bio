const express = require('express')

const logic = {
    '/api/package.core.system/sys': require('./api-sys').logic
}

const router = express.Router()
router.use('/api/package.core.system/sys', require('./api-sys').router)

module.exports = {router, logic}
