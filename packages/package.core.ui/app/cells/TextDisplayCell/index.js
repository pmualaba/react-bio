import React from 'react'
import styled, {keyframes, css} from 'styled-components'

const TextDisplayCellStyled = styled.div``

class TextDisplayCell extends React.Component {
    state = {}

    render() {
        console.log('TextDisplayCell render()')
        return <TextDisplayCellStyled className="TextDisplayCell">{typeof this.props.value === 'string' && this.props.value}</TextDisplayCellStyled>
    }
}

export default TextDisplayCell
