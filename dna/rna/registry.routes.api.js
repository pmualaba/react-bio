/**
 * API Router
 */

const express = require('express')

const router = express.Router()
const logic = {}

router.use(require('../../packages/package.core.system/api').router)
router.use(require('../../packages/package.core.ui/api').router)
router.use(require('../../packages/package.core.cms/api').router)
router.use(require('../../packages/package.apis.facebook/api').router)

logic['package.core.system'] = require('../../packages/package.core.system/api').logic
logic['package.core.ui'] = require('../../packages/package.core.ui/api').logic
logic['package.core.cms'] = require('../../packages/package.core.cms/api').logic
logic['package.apis.facebook'] = require('../../packages/package.apis.facebook/api').logic

module.exports = {router, logic}
