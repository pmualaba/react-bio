/**
 * API Router
 */

const express = require('express')

const routerApi = express.Router()
const logic = {}

routerApi.use(require('../packages/package.core.system/api').router)
routerApi.use(require('../packages/package.core.ui/api').router)
routerApi.use(require('../packages/package.core.cms/api').router)

logic['package.core.system'] = require('../packages/package.core.system/api').logic
logic['package.core.ui'] = require('../packages/package.core.ui/api').logic
logic['package.core.cms'] = require('../packages/package.core.cms/api').logic

module.exports = {router: routerApi, logic}
