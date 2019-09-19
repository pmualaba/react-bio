const express = require('express')

const router = express.Router()

router.use('/api/authentication', require('./api-web'))

module.exports = router
