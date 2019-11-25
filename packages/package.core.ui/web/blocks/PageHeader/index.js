import React, {useRef} from 'react'
import Link from 'next/link'
import PageHeaderStyled from './styled'
import TopNav from '../TopNav'
import {hooks} from '../../../../package.core.fn'

/**
 * Component
 */

export default function PageHeader(props) {
    const refBlock = useRef()

    hooks.blocks.useResponsiveBlock(refBlock, 20)

    const {css, motion} = props.context.theme.render(props)
    return (
        <PageHeaderStyled
            ref={refBlock}
            meta={props.meta}
            dna={props.dna}
            context={props.context}
            css={css}
            {...motion}
            style={props.dna.ui['theme.style.css']}
        >
            <h1 className="PageHeader__title">React Bio</h1>
            <h3>
                Full Stack Open Source Platform to Build Declarative DNA Driven React Applications
            </h3>
            <Link href="/templates/web/package.core.auth.login" as="/login">
                <a>Login Page</a>
            </Link>
        </PageHeaderStyled>
    )
}
