import React, {useRef} from 'react'
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
            <TopNav meta={props.meta} dna={props.dna} context={props.context} />
            <h1>React Bio</h1>
            <h3>Build DNA Driven React Applications</h3>
            <p>
                <a href="https://github.com/pmualaba/react-bio">
                    https://github.com/pmualaba/react-bio
                </a>
            </p>
        </PageHeaderStyled>
    )
}
