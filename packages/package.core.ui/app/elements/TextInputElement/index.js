import React from 'react'
import PropTypes from 'prop-types'

class TextInputElement extends React.Component {
    state = {
        inputValue: ''
    }

    componentWillMount() {
        this.setState({inputValue: this.props.value})
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({inputValue: nextProps.value})
        }
    }

    onInputChange = e => {
        this.setState({inputValue: e.target.value})
        this.props.onKeyUp(e.target.value)
    }

    render() {
        return (
            <div address={this.props.address} className={`TextInputElement ${this.props.className}`}>
                {this.props.isEditMode || true ? (
                    <input
                        type="text"
                        name={this.props.name}
                        id={this.props.htmlId}
                        placeholder={this.props.placeholder}
                        value={(typeof this.state.inputValue === 'string' && this.state.inputValue) || ''}
                        className="input field"
                        onChange={e => this.onInputChange(e)}
                        onMouseOver={e => e.preventDefault()}
                        onBlur={e =>
                            this.props.onValueUpdate({
                                value: e.target.value,
                                dataKeys: this.props.dataKeys,
                                meta: this.props.meta
                            })
                        }
                    />
                ) : (
                    <span className="value">{(typeof this.props.value === 'string' && this.props.value) || 'not a string'}</span>
                )}
                {this.props.unit && <span className="unit">{this.props.unit}</span>}
            </div>
        )
    }
}

TextInputElement.propTypes = {
    value: PropTypes.string,
    rowIndex: PropTypes.number,
    dataKeys: PropTypes.objectOf(PropTypes.any).isRequired,
    meta: PropTypes.objectOf(PropTypes.any),
    isEditMode: PropTypes.bool,
    className: PropTypes.string,
    themeColor: PropTypes.string,
    placeholder: PropTypes.string,
    onKeyUp: PropTypes.func,
    onValueUpdate: PropTypes.func.isRequired
}

TextInputElement.defaultProps = {
    isEditMode: false,
    onKeyUp: () => null
}

export default TextInputElement
