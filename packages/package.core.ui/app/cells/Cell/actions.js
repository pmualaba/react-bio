/**
 * ************
 * Action Types
 * ************
 */

export const UPDATE_COMPONENT_POSITION = 'package.core.admin.ui/DraggableWrapper/UPDATE_COMPONENT_POSITION'
export const COLLAPSE_COMPONENT = 'package.core.admin.ui/DraggableWrapper/COLLAPSE_COMPONENT'
export const EXPAND_COMPONENT = 'package.core.admin.ui/DraggableWrapper/EXPAND_COMPONENT'
export const UPDATE_COMPONENT_FORM_FIELD = 'package.core.admin.ui/DraggableWrapper/UPDATE_COMPONENT_FORM_FIELD'
export const DELETE_COMPONENT = 'package.core.admin.ui/DraggableWrapper/DELETE_COMPONENT'

export const CREATE_NEW_CARD = 'package.core.admin.ui/DraggableWrapper/CREATE_NEW_CARD'
export const CREATE_NEW_TOPIC = 'package.core.admin.ui/DraggableWrapper/CREATE_NEW_TOPIC'
export const CREATE_NEW_TOPIC_SUCCESS = 'package.core.admin.ui/DraggableWrapper/CREATE_NEW_TOPIC_SUCCESS'
export const CREATE_NEW_TOPIC_FAILED = 'package.core.admin.ui/DraggableWrapper/CREATE_NEW_TOPIC_FAILED'
export const GET_CARD_SUBJECT = 'package.core.admin.ui/DraggableWrapper/GET_CARD_SUBJECT'
export const GET_CARD_SUBJECT_FAILED = 'package.core.admin.ui/DraggableWrapper/GET_CARD_SUBJECT_FAILED'
export const GET_CARD_SUBJECT_SUCCESS = 'package.core.admin.ui/DraggableWrapper/GET_CARD_SUBJECT_SUCCESS'

export const MULTI_SELECT_DROPDOWN_ITEM = 'package.core.admin.ui/DraggableWrapper/MULTI_SELECT_DROPDOWN_ITEM'
export const SET_CELL_IN_EDITMODE = 'package.core.admin.ui/DraggableWrapper/SET_CELL_IN_EDITMODE'

export const GET_SELECT_OPTIONS = 'package.core.admin.ui/DraggableWrapper/GET_SELECT_OPTIONS'
export const GET_SELECT_OPTIONS_SUCCESS = 'package.core.admin.ui/DraggableWrapper/GET_SELECT_OPTIONS_SUCCESS'
export const GET_SELECT_OPTIONS_FAILED = 'package.core.admin.ui/DraggableWrapper/GET_SELECT_OPTIONS_FAILED'

export const FILE_UPLOAD_SUCCESS = 'package.core.admin.ui/DraggableWrapper/FILE_UPLOAD_SUCCESS'
export const ON_CELL_UPDATE = 'package.core.app.ui/Cell/ON_CELL_UPDATE'

export const ADD_RELATED_SUBJECT = 'package.core.admin.ui/DraggableWrapper/ADD_RELATED_SUBJECT'
export const REMOVE_RELATED_SUBJECT = 'package.core.admin.ui/DraggableWrapper/REMOVE_RELATED_SUBJECT'
export const UPDATE_RELATED_SUBJECT = 'package.core.admin.ui/DraggableWrapper/UPDATE_RELATED_SUBJECT'

/**
 * FSA
 * Flux Standard Action Creator
 */
export default (type, error = false, payload = {}, meta = {package: 'package.core.app.ui'}) => ({type, error, payload, meta})
