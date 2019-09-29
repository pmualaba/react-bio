/**
 * ************
 * Action Types
 * ************
 */
export const GET_INSTANCES_BY_TYPE = 'package.core.data/GET_INSTANCES_BY_TYPE'
export const GET_INSTANCES_BY_TYPE_SUCCESS = 'package.core.data/db/GET_INSTANCES_BY_TYPE_SUCCESS'
export const GET_INSTANCES_BY_TYPE_FAILED = 'package.core.data/db/GET_INSTANCES_BY_TYPE_FAILED'

export const GET_INSTANCE_BY_ID = 'package.core.data/db/GET_INSTANCE_BY_ID'
export const GET_INSTANCE_BY_ID_SUCCESS = 'package.core.data/db/GET_INSTANCE_BY_ID_SUCCESS'
export const GET_INSTANCE_BY_ID_FAILED = 'package.core.data/db/GET_INSTANCE_BY_ID_FAILED'

export const CREATE_INSTANCE_OPTIMISTIC = 'package.core.data/db/CREATE_INSTANCE_OPTIMISTIC'
export const CREATE_INSTANCE = 'package.core.data/db/CREATE_INSTANCE'
export const CREATE_INSTANCE_SUCCESS = 'package.core.data/db/CREATE_INSTANCE_SUCCESS'
export const CREATE_INSTANCE_FAILED = 'package.core.data/db/CREATE_INSTANCE_FAILED'

export const UPDATE_INSTANCE_OPTIMISTIC = 'package.core.data/db/UPDATE_INSTANCE_OPTIMISTIC'
export const UPDATE_INSTANCE = 'package.core.data/db/UPDATE_INSTANCE'
export const UPDATE_INSTANCE_SUCCESS = 'package.core.data/db/UPDATE_INSTANCE_SUCCESS'
export const UPDATE_INSTANCE_FAILED = 'package.core.data/db/UPDATE_INSTANCE_FAILED'

export const DELETE_INSTANCE_OPTIMISTIC = 'package.core.data/db/DELETE_INSTANCE_OPTIMISTIC'
export const DELETE_INSTANCE = 'package.core.data/db/DELETE_INSTANCE'
export const DELETE_INSTANCE_SUCCESS = 'package.core.data/db/DELETE_INSTANCE_SUCCESS'
export const DELETE_INSTANCE_FAILED = 'package.core.data/db/DELETE_INSTANCE_FAILED'

export const ON_CELL_UPDATE = 'package.core.data/db/ON_CELL_UPDATE'
export const ON_COMPONENT_HOOK = 'package.core.data/db/ON_COMPONENT_HOOK'

/**
 * FSA
 * Flux Standard Action Creator
 */
const FSA = (type, error = false, payload = {}, meta = {package: 'package.core.data'}) => ({
    type,
    error,
    payload,
    meta
})
export default FSA
