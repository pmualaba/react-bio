const express = require('express')

const router = express.Router()

router.use('/api/auth', require('./api-web'))

module.exports = router
