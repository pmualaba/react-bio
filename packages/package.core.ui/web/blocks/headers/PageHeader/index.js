import React, {useRef} from 'react'
import Link from 'next/link'
import PageHeaderStyled from './styled'
import TopNav from '../../navigation/TopNav'
import hooks from '../../../../../package.core.fn/hooks'

/**
 * Component
 */

export default function PageHeader(props) {
    const refBlock = useRef()

    hooks.blocks.useResponsiveBlock(refBlock, 20)

    return (
        <PageHeaderStyled ref={refBlock} meta={props.meta} dna={props.dna} context={props.context}>
            <h1 className="PageHeader__title">React Bio</h1>
            <h3>A Full Stack Open Source Platform to Build DNA Driven React Applications</h3>
            <Link href="/templates/web/package.core.auth.login" title="Login Page" as="/login">
                <a>Login Page</a>
            </Link>
        </PageHeaderStyled>
    )
}
