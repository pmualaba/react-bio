import { connect } from 'react-redux'

import LoginForm from './index'
import { identityFieldSelector, passwordFieldSelector, languageSwitcherSelector } from './selectors'
import FSA, * as ActionTypes from './actions'

const mapState = (state, props) => ({
    identityField: identityFieldSelector(state),
    passwordField: passwordFieldSelector(state),
    languageSwitcher: languageSwitcherSelector(state),
    device: props.device
})

export const actions = {
    onSubmitButtonClick: (e, identity, secret, locale, device) =>
        FSA(ActionTypes.AUTHENTICATE_USER, false, { identity, secret, locale, device }),

    onCredentialsChange: e => FSA(ActionTypes.UI_UPDATE_VALUE, false, { uiTarget: e.target.id, currentValue: e.target.value }),

    onLanguageSwitch: e => FSA(ActionTypes.UI_UPDATE_VALUE, false, { uiTarget: e.target.id, currentValue: e.target.value })
}

export default connect(mapState, actions)(LoginForm)
