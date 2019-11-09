import {createSelector} from 'reselect'

export const user = state => state['package.core.authentication'].LoginForm.db.user
export const identitySelector = createSelector(user, user => user.identity)

export const uiErrors = state => state['package.core.authentication'].LoginForm.ui.errors

export const identityField = state => state['package.core.authentication'].LoginForm.ui.formFields[0]
export const identityFieldSelector = createSelector(identityField, uiErrors, (identityField, uiErrors) => ({
    label: identityField.label,
    value: identityField.currentValue,
    error: uiErrors[identityField.name]
}))

export const passwordField = state => state['package.core.authentication'].LoginForm.ui.formFields[1]
export const passwordFieldSelector = createSelector(passwordField, uiErrors, (passwordField, uiErrors) => ({
    label: passwordField.label,
    value: passwordField.currentValue,
    error: uiErrors[passwordField.name]
}))

export const languageSwitcher = state => state['package.core.authentication'].LoginForm.ui.formFields[2]
export const languageSwitcherSelector = createSelector(languageSwitcher, uiErrors, (languageSwitcher, uiErrors) => ({
    label: languageSwitcher.label,
    value: languageSwitcher.currentValue,
    error: uiErrors[languageSwitcher.name],
    languages: languageSwitcher.valueList
}))
