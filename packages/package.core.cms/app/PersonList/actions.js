/**
 * ************
 * Action Types
 * ************
 */
export const GET_PERSONS = 'package.core.crm/PersonList/GET_PERSONS'
export const GET_PERSONS_SUCCESS = 'package.core.crm/PersonList/GET_PERSONS_SUCCESS'

export const CREATE_PERSON_OPTIMISTIC = 'package.core.crm/PersonList/CREATE_PERSON_OPTIMISTIC'
export const CREATE_PERSON = 'package.core.crm/PersonList/CREATE_PERSON'
export const CREATE_PERSON_SUCCESS = 'package.core.crm/PersonList/CREATE_PERSON_SUCCESS'
export const CREATE_PERSON_FAILED = 'package.core.crm/PersonList/CREATE_PERSON_FAILED'

export const EDIT_PERSON = 'package.core.crm/PersonList/EDIT_PERSON'
export const EDIT_PERSON_CANCEL = 'package.core.crm/PersonList/EDIT_PERSON_CANCEL'

export const UPDATE_PERSON = 'package.core.crm/PersonList/UPDATE_PERSON'
export const UPDATE_PERSON_OPTIMISTIC = 'package.core.crm/PersonList/UPDATE_PERSON_OPTIMISTIC'
export const UPDATE_PERSON_CANCEL = 'package.core.crm/PersonList/UPDATE_PERSON_CANCEL'

export const DELETE_PERSON = 'package.core.crm/PersonList/DELETE_PERSON'
export const DELETE_PERSON_OPTIMISTIC = 'package.core.crm/PersonList/DELETE_PERSON_OPTIMISTIC'

export const ON_CELL_UPDATE = 'package.core.crm/PersonList/ON_CELL_UPDATE'
export const ON_COMPONENT_HOOK = 'package.core.crm/PersonList/ON_COMPONENT_HOOK'

/**
 * FSA
 * Flux Standard Action Creator
 */
const FSA = (type, error = false, payload = {}, meta = {package: 'package.core.cms'}) => ({
    type,
    error,
    payload,
    meta
})

export default FSA
