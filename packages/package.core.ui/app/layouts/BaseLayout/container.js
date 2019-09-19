import React from 'react'
import {connect} from 'react-redux'

import BaseLayout from './index'
import FSA, * as ActionTypes from './actions'

const mapState = state => ({
    sideBarIsLocked: state['package.core.ui'].BaseLayout.ui.sideBarIsLocked,
    detailPanelIsLocked: state['package.core.ui'].BaseLayout.ui.detailPanelIsLocked,
    sideBarVisibility: state['package.core.ui'].BaseLayout.ui.sideBarVisibility,
    detailPanelVisibility: state['package.core.ui'].BaseLayout.ui.detailPanelVisibility,
    detailPanelAddNew: state['package.core.ui'].BaseLayout.ui.detailPanelAddNew,
    mainPanelOverlay: state['package.core.ui'].BaseLayout.ui.mainPanelOverlay,
    modalIsActive: state['package.core.ui'].BaseLayout.ui.modalIsActive,
    modalConfig: state['package.core.ui'].BaseLayout.ui.modalConfig,
    notificationIsActive: state['package.core.ui'].BaseLayout.ui.notificationIsActive,
    notificationConfigs: state['package.core.ui'].BaseLayout.ui.notificationConfigs,
    globalSearchInputValue: state['package.core.ui'].BaseLayout.ui.globalSearch.inputValue,
    router: state.global.router,
    moduleName: state.global.router.currentRoute.split('/')[1],
    subModuleName: state.global.router.currentRoute.split('/')[2],
    theme: state.global.theme,
    blockUiConfig: state['package.core.ui'].BaseLayout.ui.blockUiConfig
})

export const actions = {
    onSideBarClick: () => FSA(ActionTypes.EXPAND_SIDEBAR_VISIBILITY),
    onSideBarCloseClick: () => FSA(ActionTypes.COLLAPSE_SIDEBAR_VISIBILITY),
    onSideBarLockClick: () => FSA(ActionTypes.TOGGLE_SIDEBAR_LOCK),
    onContextPanelClick: () => FSA(ActionTypes.EXPAND_CONTEXTPANEL_VISIBILITY),
    onDetailPanelClick: () => FSA(ActionTypes.EXPAND_DETAILPANEL_VISIBILITY),
    onDetailPanelLockClick: () => FSA(ActionTypes.TOGGLE_DETAILPANEL_LOCK),
    onCloseDetailPanelClick: () => FSA(ActionTypes.ON_DETAIL_PANEL_CLOSE_CLICK),
    onMinimizeDetailPanelClick: () => FSA(ActionTypes.ON_DETAIL_PANEL_MINIMIZE_CLICK),
    onModalCancelClick: modalConfig => FSA(ActionTypes.CLOSE_MODAL, false, {modalConfig}),
    onModalConfirmClick: modalConfig => FSA(ActionTypes.CONFIRM_MODAL_CLICK, false, {modalConfig}),
    onDetailEditClick: () => FSA(ActionTypes.ON_DETAIL_EDIT_CLICK),
    onGlobalSearchInputValueChange: inputValue => FSA(ActionTypes.ON_GLOBAL_SEARCH_INPUT_CHANGE, false, {inputValue})
}

export default connect(
    mapState,
    actions
)(BaseLayout)
