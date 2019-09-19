const express = require('express')

const router = express.Router()

router.use('/api/global/app', require('./api-app'))

module.exports = router
