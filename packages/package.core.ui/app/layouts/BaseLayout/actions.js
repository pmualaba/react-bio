/**
 * ************
 * Action Types
 * ************
 */

/**
 * SIDEBAR ACTIONS
 */
export const EXPAND_SIDEBAR_VISIBILITY = 'package.core.app.ui/BaseLayout/EXPAND_SIDEBAR_VISIBILITY'
export const COLLAPSE_SIDEBAR_VISIBILITY = 'package.core.app.ui/BaseLayout/COLLAPSE_SIDEBAR_VISIBILITY'
export const TOGGLE_SIDEBAR_VISIBILITY = 'package.core.app.ui/BaseLayout/TOGGLE_SIDEBAR_VISIBILITY'
export const TOGGLE_SIDEBAR_LOCK = 'package.core.app.ui/BaseLayout/SIDEBAR_LOCK_CLICK'
/**
 * PANELLAYOUT ACTIONS
 */
export const EXPAND_CONTEXTPANEL_VISIBILITY = 'package.core.app.ui/BaseLayout/EXPAND_CONTEXTPANEL_VISIBILITY'
export const EXPAND_DETAILPANEL_VISIBILITY = 'package.core.app.ui/BaseLayout/EXPAND_DETAILPANEL_VISIBILITY'
export const COLLAPSE_DETAILPANEL_VISIBILITY = 'package.core.app.ui/BaseLayout/COLLAPSE_DETAILPANEL_VISIBILITY'
export const EXPAND_DETAILPANEL_ADDNEW_VISIBILITY = 'package.core.app.ui/BaseLayout/EXPAND_DETAILPANEL_ADDNEW_VISIBILITY'
export const COLLAPSE_DETAILPANEL_ADDNEW_VISIBILITY = 'package.core.app.ui/BaseLayout/COLLAPSE_DETAILPANEL_ADDNEW_VISIBILITY'
export const TOGGLE_DETAILPANEL_LOCK = 'package.core.app.ui/BaseLayout/TOGGLE_DETAILPANEL_LOCK'
export const ON_DETAIL_EDIT_CLICK = 'package.core.app.ui/BaseLayout/ON_DETAIL_EDIT_CLICK'
export const ON_DETAIL_PANEL_CLOSE_CLICK = 'package.core.app.ui/BaseLayout/ON_DETAIL_PANEL_CLOSE_CLICK'
export const ON_DETAIL_PANEL_MINIMIZE_CLICK = 'package.core.app.ui/BaseLayout/ON_DETAIL_PANEL_MINIMIZE_CLICK'

export const SHOW_INSTANCE_EDITOR = 'package.core.app.ui/BaseLayout/SHOW_INSTANCE_EDITOR'
export const HIDE_INSTANCE_EDITOR = 'package.core.app.ui/BaseLayout/HIDE_INSTANCE_EDITOR'

export const CLOSE_MODAL = 'package.core.app.ui/BaseLayout/CLOSE_MODAL'
export const OPEN_MODAL = 'package.core.app.ui/BaseLayout/OPEN_MODAL'
export const CONFIRM_MODAL_CLICK = 'package.core.app.ui/BaseLayout/CONFIRM_MODAL_CLICK'

export const OPEN_NOTIFICATION = 'package.core.app.ui/BaseLayout/OPEN_NOTIFICATION'
export const CLOSE_NOTIFICATION = 'package.core.app.ui/BaseLayout/CLOSE_NOTIFICATION'

export const BLOCK_UI = 'package.core.app.ui/BaseLayout/BLOCK_UI'
export const UNBLOCK_UI = 'package.core.app.ui/BaseLayout/UNBLOCK_UI'

export const ON_GLOBAL_SEARCH_INPUT_CHANGE = 'package.core.app.ui.BaseLayout/ON_GLOBAL_SEARCH_INPUT_CHANGE'

export const TOGGLE_DETAIL_HEADER_HEIGHT = 'package.core.app.ui.BaseLayout/TOGGLE_DETAIL_HEADER_HEIGHT'
export const TOGGLE_ADDNEW_HEADER_HEIGHT = 'package.core.app.ui.BaseLayout/TOGGLE_ADDNEW_HEADER_HEIGHT'
/**
 * FSA
 * Flux Standard Action Creator
 */
export default (type, error = false, payload = {}, meta = {package: 'package.core.app.ui'}) => ({
    type,
    error,
    payload,
    meta
})
