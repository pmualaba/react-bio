import React, {useRef} from 'react'
import {useDispatch} from 'react-redux'
import LoginFormStyled from './styled'
import hooks from '../../../package.core.fn/hooks'
import ImageElement from '../../../package.core.ui/web/elements/media/ImageElement'
import TextInputElement from '../../../package.core.ui/web/elements/form/TextInputElement'

/**
 * Component
 */

export default function LoginForm(props) {
    console.log('props.data LoginForm', props)
    const refBlock = useRef()
    hooks.blocks.useResponsiveBlock(refBlock, 30)
    const dispatch = useDispatch()

    /**
     * Logo
     */
    const bio = {}
    bio.ImageElement = {
        meta: {
            '@dna': `${props.meta['@dna']}.elements[0:ImageElement]`,
            '@component': "['package.core.ui'].web.elements.ImageElement",
            name: 'ImageElement',
            class: 'ImageElement',
            kind: 'element'
        },
        dna: {
            data: {
                accessors: {
                    src: 'domain.hasFeaturedImage.src'
                }
            },
            set: {},
            ui: {},
            actions: {}
        },
        data: {init: props.data.init.logo},
        context: props.context
    }
    /**
     * User
     */

    bio.TextInputElement__user = {
        meta: {
            '@dna': `${props.meta['@dna']}.elements[1:TextInputElement]`,
            '@component': "['package.core.ui'].web.elements.TextInputElement",
            name: 'TextInputElement',
            class: 'TextInputElement',
            kind: 'element'
        },
        dna: {
            data: {
                accessors: {
                    src: 'domain.hasFeaturedImage.src'
                }
            },
            set: {},
            ui: {},
            actions: {}
        },
        fn: {
            onKeyUp(e) {
                dispatch({
                    type: 'ON_KEY_UP',
                    error: false,
                    payload: {value: e.target.value},
                    meta: props.meta
                })
            },
            onValueUpdate(e) {
                dispatch({
                    type: 'ON_VALUE_UPDATE',
                    error: false,
                    payload: {value: e.target.value},
                    meta: props.meta
                })
            }
        },
        data: {init: props.data.init.logo},
        context: props.context
    }
    /**
     * Password
     */
    bio.TextInputElement__password = bio.TextInputElement__user
    /* prettier-ignore */
    bio.TextInputElement__password.meta['@dna'] = `${props.meta['@dna']}.elements[2:TextInputElement]`
    bio.TextInputElement__password.dna.data.accessors = {}

    const {css, motion} = props.context.theme.render(props)
    return (
        <LoginFormStyled
            ref={refBlock}
            meta={props.meta}
            dna={props.dna}
            context={props.context}
            css={css}
            {...motion}
            style={props.dna.ui['theme.style.css']}
        >
            <ImageElement {...bio.ImageElement} />
            <TextInputElement {...bio.TextInputElement__user} />
            <TextInputElement {...bio.TextInputElement__password} />
        </LoginFormStyled>
    )
}
