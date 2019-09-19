import {combineReducers} from 'redux'
import * as ActionTypes from './actions'

/**
 * Initial State ui
 */
export const ui = {
    sideBarIsLocked: false,
    sideBarVisibility: 'sidebar-collapsed',
    detailPanelIsLocked: false,
    detailPanelVisibility: 'detail-collapsed',
    // Add New Panel ------
    detailPanelAddNew: {
        visibility: 'detailaddnew-hidden',
        panelComponentName: null,
        panelComponentProps: null
    },
    mainPanelOverlay: {
        visible: false,
        panelComponentName: null,
        panelComponentProps: null
    },
    modalIsActive: false,
    modalConfig: {
        modalName: 'ErrorModal',
        modalActionTarget: '',
        modalTitle: null,
        modalText: null,
        cancelButtonLabel: 'Cancel',
        actionButtonLabel: 'Ok'
    },
    notificationConfigs: [
        // {
        //     notificationConfirmAction: '',
        //     notificationUndoAction: '',
        //     id: '',
        //     name: '',
        //     message: '',
        //     withUndo: true
        // }
    ],
    globalSearch: {
        inputValue: ''
    },
    adminMenuActive: false,
    blockUiConfig: {
        block: false,
        message: ''
    }
}

const uiReducer = (state = ui, action) => {
    switch (action.type) {
        /*
        * ------------------------ SIDEBAR ------------------------------
        */

        // User clicked on the sidebar lock, toggle lock state from the previous value
        case ActionTypes.TOGGLE_SIDEBAR_LOCK:
            return {
                ...state,
                sideBarIsLocked: !state.sideBarIsLocked
            }

        // User clicked on the sidebar, expand it
        case ActionTypes.TOGGLE_SIDEBAR_VISIBILITY:
            return {
                ...state,
                sideBarVisibility: state.sideBarVisibility === 'sidebar-collapsed' ? 'sidebar-expanded' : 'sidebar-collapsed'
            }

        case ActionTypes.EXPAND_SIDEBAR_VISIBILITY:
            return {
                ...state,
                sideBarVisibility: 'sidebar-expanded'
            }

        // User closes the sidebar
        case ActionTypes.COLLAPSE_SIDEBAR_VISIBILITY:
            return {
                ...state,
                sideBarVisibility: 'sidebar-collapsed'
            }

        /*
        * ------------------------ DETAILPANEL ------------------------------
        */

        // User clicked on the detailpanel lock, toggle lock state from the previous value
        case ActionTypes.TOGGLE_DETAILPANEL_LOCK:
            return {
                ...state,
                detailPanelIsLocked: !state.detailPanelIsLocked
            }

        // User clicked on the detailpanel, expand it
        case ActionTypes.EXPAND_DETAILPANEL_VISIBILITY:
            if (state.detailPanelVisibility === 'detail-expanded') {
                return {
                    ...state,
                    detailPanelVisibility: 'detail-full'
                }
            }
            if (state.detailPanelVisibility === 'detail-full') {
                return {
                    ...state,
                    detailPanelVisibility: 'detail-full'
                }
            }
            return {
                ...state,
                detailPanelVisibility: 'detail-expanded'
            }

        // Close the detail panel
        case ActionTypes.ON_DETAIL_PANEL_CLOSE_CLICK:
            return {
                ...state,
                detailPanelVisibility: 'detail-collapsed'
            }

        // Go from the expanded to the normal detail size
        case ActionTypes.ON_DETAIL_PANEL_MINIMIZE_CLICK:
            return {
                ...state,
                detailPanelVisibility: 'detail-expanded'
            }

        // User clicked on add row in contextpanel table, collapse detailpanel
        case ActionTypes.COLLAPSE_DETAILPANEL_VISIBILITY:
            return {
                ...state,
                detailPanelVisibility: 'detail-collapsed'
            }

        /*
        * ------------------------ CONTEXTPANEL ------------------------------
        */

        // Close both panels when clicked outside, only when they are not locked
        case ActionTypes.EXPAND_CONTEXTPANEL_VISIBILITY:
            return {
                ...state,
                detailPanelVisibility: state.detailPanelIsLocked ? 'detail-expanded' : 'detail-collapsed',
                sideBarVisibility: state.sideBarIsLocked ? 'sidebar-expanded' : 'sidebar-collapsed'
            }

        /*
    * ------------------------ DETAILPANEL ADDNEW ------------------------------
    */

        // User clicked on add row in contextpanel table, expand addnew detailpanel
        case ActionTypes.EXPAND_DETAILPANEL_ADDNEW_VISIBILITY:
            return {
                ...state,
                detailPanelAddNew: {
                    ...state.detailPanelAddNew,
                    visibility: 'detailaddnew-expanded',
                    panelComponentName: action.payload.panelComponentName,
                    panelComponentProps: action.payload.panelComponentProps
                }
            }

        // User clicked collapse button for the detail add new panel
        case ActionTypes.COLLAPSE_DETAILPANEL_ADDNEW_VISIBILITY:
            return {
                ...state,
                detailPanelAddNew: {
                    ...state.detailPanelAddNew,
                    visibility: 'detailaddnew-hidden'
                }
            }

        /*
        * ------------------------ DETAILOVERLAY ADDNEW ------------------------------
        */

        // User clicked on add row in contextpanel table, expand addnew detailpanel

        case ActionTypes.SHOW_INSTANCE_EDITOR:
            return {
                ...state,
                mainPanelOverlay: {
                    ...state.mainPanelOverlay,
                    visible: true,
                    panelComponentName: action.payload.panelComponentName,
                    panelComponentProps: action.payload.panelComponentProps
                }
            }

        // User clicked collapse button for the detail add new panel
        case ActionTypes.HIDE_INSTANCE_EDITOR:
            return {
                ...state,
                mainPanelOverlay: {
                    ...state.mainPanelOverlay,
                    visible: false
                }
            }

        /*
        * ------------------------ MODAL ------------------------------
        */

        // Open the modal when a certain action requires this
        // A Modal Config object can be passed down with custom configuration for the modal
        // You can also pass an instanceId for example, so you can catch the CONFIRM_MODAL_CLICK with
        // that instanceId comming back, you can now perform your action when the user confirms
        case ActionTypes.OPEN_MODAL:
            return {
                ...state,
                modalIsActive: true,
                modalConfig: action.payload
            }

        // Close the modal and reset the config object to an empty object
        case ActionTypes.CLOSE_MODAL:
            return {
                ...state,
                modalIsActive: false,
                modalConfig: {}
            }

        /*
        * ------------------------ ALERT ------------------------------
        */

        case ActionTypes.OPEN_NOTIFICATION:
            return {
                ...state,
                notificationConfigs: [
                    ...state.notificationConfigs,
                    {
                        notificationConfirmAction: action.payload.notificationConfirmAction,
                        notificationUndoAction: action.payload.notificationUndoAction,
                        displayDuration: action.payload.displayDuration,
                        id: action.payload.id,
                        type: action.payload.type,
                        message: action.payload.message
                    }
                ]
            }

        case ActionTypes.CLOSE_NOTIFICATION:
            return {
                ...state,
                notificationConfigs: [...state.notificationConfigs].filter(n => n.id !== action.payload.id)
            }

        /*
        * ------------------------ GLOBAL SEARCH ------------------------------
        */

        // There is an onChange by the user in the global search field
        case ActionTypes.ON_GLOBAL_SEARCH_INPUT_CHANGE:
            return {
                ...state,
                globalSearch: {
                    ...state.globalSearch,
                    inputValue: action.payload.inputValue
                }
            }

        case ActionTypes.BLOCK_UI:
            return {
                ...state,
                blockUiConfig: {
                    block: true,
                    message: action.payload.message
                }
            }

        case ActionTypes.UNBLOCK_UI:
            return {
                ...state,
                blockUiConfig: {
                    block: false,
                    message: ''
                }
            }

        default:
            return state
    }
}

export default combineReducers({
    ui: uiReducer
})
