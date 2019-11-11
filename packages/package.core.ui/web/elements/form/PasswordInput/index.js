import PropTypes from 'prop-types'

const PasswordInput = props => {
    let required = ''
    let asterisk = ''

    if (props.isRequired) {
        required = 'req'
        asterisk = '*'
    }

    return (
        <div className={`PasswordInput Form__field-container ${props.className}`}>
            <label htmlFor={props.name} className="sr-only">
                <span className={required}>{asterisk}</span>
            </label>
            <img src={props.icon} alt="" />
            <input
                type="password"
                name={props.name}
                id={props.name}
                value={props.value}
                className="Form__field"
                placeholder={`${asterisk} ${props.label}`}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
            <p className="field-alert">{props.alert}</p>
        </div>
    )
}

PasswordInput.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
    icon: PropTypes.string,
    alert: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
}

PasswordInput.defaultProps = {
    name: '',
    className: '',
    value: '',
    isRequired: false,
    alert: '',
    icon: ''
}

export default PasswordInput
