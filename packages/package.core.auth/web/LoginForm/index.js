import React, {useRef} from 'react'
import LoginFormStyled from './styled'
import hooks from '../../../package.core.fn/hooks'
import ImageElement from '../../../package.core.ui/web/elements/media/ImageElement'

/**
 * Component
 */

export default function LoginForm(props) {
    console.log('props.data LoginForm', props)
    const refBlock = useRef()
    hooks.blocks.useResponsiveBlock(refBlock, 20)

    const bio = {
        ImageElement: {
            meta: {
                '@dna': `${props.meta['@dna']}.elements[0:ImageElement]`,
                '@component': "['package.core.ui'].web.elements.ImageElement",
                name: 'ImageElement',
                class: 'ImageElement',
                kind: 'element'
            },
            genes: {
                ui: {},
                set: {}
            }
        }
    }

    return (
        <LoginFormStyled ref={refBlock} meta={props.meta} dna={props.dna} context={props.context}>
            <ImageElement
                meta={bio.ImageElement.meta}
                dna={bio.ImageElement.genes}
                data={props.data}
                context={props.context}
            />
        </LoginFormStyled>
    )
}
