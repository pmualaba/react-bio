import React, {useRef} from 'react'
import PageFooterStyled from './styled'
import {hooks} from '../../../../package.core.fn'

/**
 * Component
 */

export default function PageFooter(props) {
    const refBlock = useRef()

    hooks.blocks.useResponsiveBlock(refBlock, 20)

    return (
        <PageFooterStyled ref={refBlock} meta={props.meta} dna={props.dna} context={props.context}>
            <p className="PageFooter__links">
                <a
                    className="PageFooter__link"
                    href="https://github.com/pmualaba/react-bio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://github.com/pmualaba/react-bio
                </a>
                <br />
                <a
                    className="PageFooter__link"
                    href="https://app.gitbook.com/@genlabss/s/bioop"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://app.gitbook.com/@genlabss/s/bioop
                </a>
            </p>
        </PageFooterStyled>
    )
}
