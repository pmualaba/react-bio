import PropTypes from 'prop-types'

import Spinner from '../../spinners/Spinner'

const SubmitButton = props => (
    <div className={`SubmitButton Form__field-container Form__submit-container ${props.className}`}>
        {props.spinner && <Spinner width="11px" type="dots-circle" />}
        <button type="button" name={props.name} className="Form__submit" onClick={props.onClick} ref={props.onSubmitButtonClick} disabled={!!props.disabled}>
            {props.label}
            <strong>{props.subLabel}</strong>
        </button>
    </div>
)

SubmitButton.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    subLabel: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

SubmitButton.defaultProps = {
    className: '',
    label: 'Submit',
    subLabel: ''
}

export default SubmitButton
