import PropTypes from 'prop-types'
import TextInput from '../../../package.core.ui/web/elements/form-elements/TextInput'
import PasswordInput from '../../../package.core.ui/web/elements/form-elements/PasswordInput'
import SubmitButton from '../../../package.core.ui/web/elements/form-elements/SubmitButton'
import LanguageSwitcher from '../LanguageSwitcher'

const LoginForm = props => (
    <form className="LoginForm Form">
        <TextInput
            name="identity"
            label={props.identityField.label}
            value={props.identityField.value}
            className=""
            icon="/package.core.ui/app/icons/icon-user.svg"
            isRequired={false}
            alert={props.identityField.error.alert}
            onChange={props.onCredentialsChange}
        />
        <PasswordInput
            name="secret"
            label={props.passwordField.label}
            value={props.passwordField.value}
            className=""
            icon="/package.core.ui/app/icons/icon-login.svg"
            isRequired={false}
            alert={props.passwordField.error.alert}
            onChange={props.onCredentialsChange}
        />
        <SubmitButton
            label="Login"
            name="login"
            onClick={e => {
                if (typeof window !== 'undefined' && navigator.geolocation) {
                    props.device.geoLocation = window.geoLocation
                }

                if (typeof window !== 'undefined' && window.WURFL) {
                    props.device.isMobile = window.WURFL.is_mobile
                    props.device.name = window.WURFL.complete_device_name
                    props.device.formFactor = window.WURFL.form_factor
                }

                props.onSubmitButtonClick(e, props.identityField.value, props.passwordField.value, props.languageSwitcher.value, props.device)
            }}
        />
        <LanguageSwitcher name="locale" label={props.languageSwitcher.label} className="" isRequired={false} alert={props.languageSwitcher.error.alert} languages={props.languageSwitcher.languages} onClick={props.onLanguageSwitch} />
    </form>
)

LoginForm.propTypes = {
    identityField: PropTypes.shape({
        error: PropTypes.object,
        label: PropTypes.string,
        value: PropTypes.string
    }),
    passwordField: PropTypes.shape({
        error: PropTypes.object,
        label: PropTypes.string,
        value: PropTypes.string
    }),
    onCredentialsChange: PropTypes.func.isRequired,
    device: PropTypes.shape({
        formFactor: PropTypes.string,
        geoLocation: PropTypes.object,
        ip: PropTypes.string,
        isMobile: PropTypes.bool,
        name: PropTypes.string
    }),
    onSubmitButtonClick: PropTypes.func.isRequired,
    onLanguageSwitch: PropTypes.func.isRequired,
    languageSwitcher: PropTypes.shape({
        error: PropTypes.object,
        label: PropTypes.string,
        languages: PropTypes.array,
        value: PropTypes.string
    })
}

LoginForm.defaultProps = {
    identityField: {error: {}, label: 'Username', value: ''},
    passwordField: {error: {}, label: 'Password', value: ''},
    languageSwitcher: {error: {}, label: 'Language', value: 'en_GB'},
    device: {
        formFactor: 'Desktop',
        geoLocation: {lat: 0, lon: 0},
        ip: '127.0.0.1',
        isMobile: false,
        name: 'Google Chrome'
    }
}

export default LoginForm
