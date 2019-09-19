import React from 'react'
import styled, {keyframes, css} from 'styled-components'
import PropTypes from 'prop-types'

const cssButton = ({height = 5, width = 5} = {}) => css`
    height: ${height}rem;
    width: ${width}rem;
    border: none;
    border-radius: 3px;
    outline: none;
    background-color: tomato;
    color: #fff;
    cursor: pointer;
    transition-duration: 60s;
    transition-timing-function: ease;

    &:hover {
        height: 5rem;
        width: 10rem;
        background-color: grey;
        transition-property: background-color, width;
        transition-duration: 3s;
        transition-timing-function: cubic-bezier(1, -0.29, 0.25, 1.05);
    }

    &:active {
        background-color: black;
        transition: background-color 5s ease, width 5s ease, height 5s ease;
        width: 50rem;
        height: 50rem;
    }

    button {
    }
`

const ButtonAnimatedStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 15rem 10rem 1fr;
    height: 100vh;
    .App__header {
        font-family: sans-serif;
        text-align: center;
    }

    .App__body {
    }

    .App__button {
        ${cssButton({height: 50, width: 250})};
    }

    h3 {
        margin-top: 5rem;
    }
    h4 {
        transform: translateX(21px);
    }
`

class ButtonAnimated extends React.Component {
    state = {}

    render() {
        return (
            <ButtonAnimatedStyled className="App__button">
                <button>Click Here {this.props.label}</button>
            </ButtonAnimatedStyled>
        )
    }
}

ButtonAnimated.propTypes = {
    label: PropTypes.string.isRequired
}

ButtonAnimated.defaultProps = {
    label: 'MyButton'
}

export default ButtonAnimated
