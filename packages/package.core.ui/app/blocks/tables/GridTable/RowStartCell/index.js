import React from 'react'
import styled, {keyframes, css} from 'styled-components'

const RowStartCellStyled = styled.div``

class RowStartCell extends React.Component {
    state = {}

    render() {
        console.log('RowStartCell render()')
        return <RowStartCellStyled className={`RowStartCell row-${this.props.row}`}>{typeof this.props.value === 'string' && this.props.value}</RowStartCellStyled>
    }
}

export default RowStartCell
