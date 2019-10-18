import React from 'react'
import PageHeaderStyled from './styled'
import TopNav from '../../navigation/TopNav'

/**
 * Component
 */

export default function PageHeader(props) {
    return (
        <PageHeaderStyled meta={props.meta} dna={props.dna} context={props.context}>
            <TopNav meta={props.meta} dna={props.dna} context={props.context} />
        </PageHeaderStyled>
    )
}
