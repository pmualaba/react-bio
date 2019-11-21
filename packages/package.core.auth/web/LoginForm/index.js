import React, {useRef, useReducer} from 'react'
import {useDispatch} from 'react-redux'
import LoginFormStyled from './styled'
import hooks from '../../../package.core.fn/hooks'
import ImageElement from '../../../package.core.ui/web/elements/media/ImageElement'
import TextInputElement from '../../../package.core.ui/web/elements/form/TextInputElement'
import Cell from '../../../package.core.ui/web/cells/Cell'

/**
 * Reducer
 */

function reducer(state, [type, payload]) {
    switch (type) {
        case 'ON_CHANGE':
            return {...state, user: payload}
        case 'ON_RESET':
            return {...state, value: ''}
        default:
            return state
    }
}

/**
 * Component
 */

export default function LoginForm(props) {
    const [state, dispatch] = useReducer(reducer, {user: '', password: ''})
    const refBlock = useRef()
    hooks.blocks.useResponsiveBlock(refBlock, 30)
    const dispatchRedux = useDispatch()
    const bio = {}

    /**
     * Cell__login
     */

    bio.Cell__login = {
        dna: {
            meta: {
                '@dna': `${props.meta['@dna']}.cells[0:Cell]`,
                '@component': "['package.core.ui'].web.cells.Cell",
                name: 'Cell__login',
                class: 'Cell',
                kind: 'cell'
            },
            data: {
                selectors: {
                    'ImageElement__logo.src': `ui['package.core.cms'].Image['${props.data.init.logo.id}'].localUrl`,
                    'ImageElement__logo.name': `ui['package.core.cms'].Image['${props.data.init.logo.id}'].name`,
                    'TextInputElement__user.value': `ui['package.core.auth'].web.LoginForm.db.user.identity`,
                    'TextInputElement__password.value': `ui['package.core.cms'].Image['${props.data.init.logo.id}'].name`
                }
            }
        },
        fn: {
            onKeyUp(payload) {
                /* dispatch(['ON_CHANGE', payload.value]) */
                dispatchRedux({
                    type: 'ON_KEY_UP',
                    error: false,
                    payload,
                    meta: props.meta
                })
            }
        }
    }

    /**
     * ImageElement__logo
     */

    bio.ImageElement__logo = {
        meta: {
            '@dna': `${props.meta['@dna']}.elements[0:ImageElement]`,
            '@component': "['package.core.ui'].web.elements.ImageElement",
            name: 'ImageElement__logo',
            class: 'ImageElement',
            kind: 'element'
        },
        dna: {
            set: {},
            ui: {},
            actions: {}
        },
        data: {
            init: {
                ...props.data.init.logo,
                src: props.data.init.logo.localUrl,
                localUrl: undefined
            }
        },
        context: props.context
    }

    /**
     * TextInputElement__user
     */

    bio.TextInputElement__user = {
        meta: {
            '@dna': `${props.meta['@dna']}.elements[1:TextInputElement]`,
            '@component': "['package.core.ui'].web.elements.TextInputElement",
            name: 'TextInputElement__user',
            class: 'TextInputElement',
            kind: 'element'
        },
        dna: {
            set: {},
            ui: {},
            actions: {}
        },
        fn: {
            onKeyUp: bio.Cell__login.fn.onKeyUp,
            onValueUpdate(payload) {
                dispatchRedux({
                    type: 'ON_VALUE_UPDATE',
                    error: false,
                    payload,
                    meta: props.meta
                })
            }
        },
        data: {
            init: {
                value: ''
            }
        },
        context: props.context
    }

    /**
     * TextInputElement__password
     */

    bio.TextInputElement__password = {
        meta: {
            '@dna': `${props.meta['@dna']}.elements[2:TextInputElement]`,
            '@component': "['package.core.ui'].web.elements.TextInputElement",
            name: 'TextInputElement__password',
            class: 'TextInputElement',
            kind: 'element'
        },
        dna: {
            set: {},
            ui: {},
            actions: {}
        },
        fn: {
            onKeyUp(payload) {
                /* dispatch(['ON_CHANGE', payload.value]) */
                dispatchRedux({
                    type: 'ON_KEY_UP',
                    error: false,
                    payload,
                    meta: props.meta
                })
            },
            onValueUpdate(payload) {
                dispatchRedux({
                    type: 'ON_VALUE_UPDATE',
                    error: false,
                    payload,
                    meta: props.meta
                })
            }
        },
        data: {
            init: {
                value: ''
            }
        },
        context: props.context
    }

    /**
     * Render
     */

    console.log('RENDER BLOCK: LoginForm')
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
            <Cell {...bio.Cell__login}>
                <ImageElement {...bio.ImageElement__logo} />
                <TextInputElement {...bio.TextInputElement__user} />
                <TextInputElement {...bio.TextInputElement__password} />
            </Cell>
        </LoginFormStyled>
    )
}
