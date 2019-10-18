import React from 'react'
import PageHeaderStyled from './styled'

/**
 * Component
 */

export default function PageHeader(props) {
    return (
        <PageHeaderStyled>
            <h2>PageHeader</h2>
            <div>User Profile</div>
            <div>Logo</div>
            <div>Hamburger Menu</div>
        </PageHeaderStyled>
    )
}
