import PropTypes from 'prop-types'

const TextInput = props => {
    let required = ''
    let asterisk = ''

    if (props.isRequired) {
        required = 'req'
        asterisk = '*'
    }

    return (
        <div className={`TextInput Form__field-container ${props.className}`}>
            <label htmlFor={props.name} className="sr-only">
                <span className={required}>{asterisk}</span>
            </label>
            <img src={props.icon} alt="" />
            <input
                type="text"
                name={props.name}
                id={props.name}
                value={props.value}
                className="Form__field"
                placeholder={`${props.label}${asterisk}`}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
            <p className="field-alert">{props.alert}</p>
        </div>
    )
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
    icon: PropTypes.string,
    alert: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func
}

TextInput.defaultProps = {
    name: '',
    className: '',
    value: '',
    isRequired: false,
    alert: '',
    icon: ''
}

export default TextInput
