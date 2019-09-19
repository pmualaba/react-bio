/**
 * API Router
 */

const express = require('express')

const router = express.Router()
const logic = {}

router.use(require('../packages/package.core.cms/api').router)

logic['package.core.cms'] = require('../packages/package.core.cms/api').logic

module.exports = {router, logic}
