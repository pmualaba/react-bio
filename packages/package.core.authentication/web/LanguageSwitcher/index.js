import PropTypes from 'prop-types'

const LanguageSwitcher = props => {
    let required = ''
    let asterisk = ''

    if (props.isRequired === true) {
        required = 'req'
        asterisk = '*'
    }

    return (
        <div className={`LanguageSwitcher LanguageSwitcher__field-container ${props.className}`} style={{marginTop: '28px'}}>
            <label htmlFor={props.htmlId} className="sr-only">
                <span className={required}>{asterisk}</span>
            </label>

            {props.languages.map(language => (
                <a type="button" name={props.name} id={props.name} key={language.locale} className="LanguageSwitcher__button" onClick={props.onClick}>
                    {language.label}
                </a>
            ))}

            <p className="field-alert">{props.alert}</p>
        </div>
    )
}

LanguageSwitcher.propTypes = {
    isRequired: PropTypes.bool,
    className: PropTypes.string,
    htmlId: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    languages: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    alert: PropTypes.string
}

LanguageSwitcher.defaultProps = {
    isRequired: false,
    className: '',
    htmlId: '',
    name: 'locale',
    id: 'locale',
    languages: [
        {
            label: 'NL',
            language: 'Nederlands',
            locale: 'nl_NL',
            value: 'nl_NL'
        },
        {
            label: 'FR',
            language: 'Français',
            locale: 'fr_FR',
            value: 'fr_FR'
        },
        {
            label: 'EN',
            language: 'English',
            locale: 'en_GB',
            value: 'en_GB'
        }
    ],
    alert: ''
}

export default LanguageSwitcher
