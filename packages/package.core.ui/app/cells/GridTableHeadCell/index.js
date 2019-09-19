import React from 'react'
import styled, {keyframes, css} from 'styled-components'

const GridTableHeadCellStyled = styled.div``

class GridTableHeadCell extends React.Component {
    state = {}

    render() {
        console.log('GridTableHeadCell render()')
        return (
            <GridTableHeadCellStyled className="GridTableHeadCell" onMouseEnter={this.props.onMouseOver}>
                {typeof this.props.value === 'string' && this.props.value}
            </GridTableHeadCellStyled>
        )
    }
}

export default GridTableHeadCell
