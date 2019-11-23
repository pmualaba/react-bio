import React from 'react'
import TopNavStyled from './styled'

/**
 * Component
 */

export default function PageHeader(props) {
    return (
        <TopNavStyled meta={props.meta} dna={props.dna} data={props.data} context={props.context}>
            <div />
            <div />
            <div />
        </TopNavStyled>
    )
}
