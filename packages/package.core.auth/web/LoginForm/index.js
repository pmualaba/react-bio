import React, {useRef, useReducer} from 'react'
import {useDispatch} from 'react-redux'
import {FSA, ON_KEY_UP, AUTHENTICATE_USER} from './reducer'
import {hooks} from '../../../package.core.fn'

import ImageElement from '../../../package.core.ui/web/elements/ImageElement'
import TextInputElement from '../../../package.core.ui/web/elements/TextInputElement'
import ButtonElement from '../../../package.core.ui/web/elements/ButtonElement'
import PaymentMethodElement from '../../../package.core.commerce/web/PaymentMethodElement'
import Cell from '../../../package.core.ui/web/cells/Cell'
import LoginFormStyled from './styled'

/**
 * Reducer
 */

function reducer(state, [type, payload]) {
    switch (type) {
        case 'on_change':
            console.log('on_change LoginForm', payload)
            return {...state, ...payload}
        case 'on_reset':
            return {...state, value: ''}
        default:
            return state
    }
}

export default function LoginForm(props) {
    /**
     * Bio Default Props
     */
    if (!props.dna.ui) {
        props.dna.ui = {}
    }

    /**
     * Data
     */

    const [state, dispatch] = useReducer(reducer, {user: '', password: '', value: 'bancontact'})

    const dispatchStore = useDispatch()

    /**
     * Hooks
     */

    const refBlock = useRef()
    hooks.blocks.useResponsiveBlock(refBlock, 30)
    /**
     * Cell__login
     */

    const bio = {}
    bio.Cell__login = {
        meta: {
            '@dna': `${props.meta['@dna']}.cells[0:Cell__login]`,
            '@component': "['package.core.ui'].web.cells.Cell",
            name: 'Cell__login',
            class: 'Cell',
            kind: 'cell'
        },
        dna: {
            data: {
                selectors: {
                    'ImageElement__logo.src': `ui['package.core.cms'].Image['${props.data.init.logo.id}'].localUrl`,
                    'ImageElement__logo.name': `ui['package.core.cms'].Image['${props.data.init.logo.id}'].name`,
                    'TextInputElement__user.value': `ui['package.core.auth'].web.LoginForm.db.user.identity`,
                    'TextInputElement__password.value': `ui['package.core.auth'].web.LoginForm.db.user.secret`
                    // 'TextInputElement__passwordConfirm.value': `ui['package.core.auth'].web.LoginForm.db.user.secret`
                }
            }
        }
    }

    /**
     * Cell__loginConfirm
     */

    bio.Cell__loginConfirm = {
        meta: {
            '@dna': `${props.meta['@dna']}.cells[0:Cell__loginConfirm]`,
            '@component': "['package.core.ui'].web.cells.Cell",
            name: 'Cell__loginConfirm',
            class: 'Cell',
            kind: 'cell'
        },
        dna: {
            data: {
                selectors: {
                    'ImageElement__logo.src': `ui['package.core.cms'].Image['${props.data.init.logo.id}'].localUrl`,
                    'ImageElement__logo.name': `ui['package.core.cms'].Image['${props.data.init.logo.id}'].name`,
                    'TextInputElement__user.value': `ui['package.core.auth'].web.LoginForm.db.user.identities`,
                    'TextInputElement__password.value': `ui['package.core.auth'].web.LoginForm.db.user.secrets`,
                    'TextInputElement__passwordConfirm.value': `ui['package.core.auth'].web.LoginForm.db.user.secrets`
                }
            }
        }
    }

    /**
     * ImageElement__logo
     */

    bio.ImageElement__logo = {
        meta: {
            '@dna': `${props.meta['@dna']}.cells[0:Cell__login].elements[0:ImageElement__logo]`,
            '@component': "['package.core.ui'].web.elements.ImageElement",
            name: 'ImageElement__logo',
            class: 'ImageElement',
            kind: 'element'
        },
        dna: {},
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
            '@dna': `${props.meta['@dna']}.cells[0:Cell__login].elements[1:TextInputElement__user]`,
            '@component': "['package.core.ui'].web.elements.TextInputElement",
            name: 'TextInputElement__user',
            class: 'TextInputElement',
            kind: 'element'
        },
        dna: {
            set: {
                autocomplete: 'off',
                name: 'user',
                label: props.context.i18n.identity.username
            },
            data: {
                validator: 'string|*|-|-'
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
            '@dna': `${props.meta['@dna']}.cells[0:Cell__login].elements[2:TextInputElement__password]`,
            '@component': "['package.core.ui'].web.elements.TextInputElement",
            name: 'TextInputElement__password',
            class: 'TextInputElement',
            kind: 'element'
        },
        dna: {
            set: {
                autocomplete: 'off',
                name: 'password',
                label: props.context.i18n.identity.password
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
     * TextInputElement__passwordConfirm
     */

    bio.TextInputElement__passwordConfirm = {
        meta: {
            '@dna': `${props.meta['@dna']}.cells[1:Cell__loginConfirm].elements[0:TextInputElement__passwordConfirm]`,
            '@component': "['package.core.ui'].web.elements.TextInputElement",
            name: 'TextInputElement__passwordConfirm',
            class: 'TextInputElement',
            kind: 'element'
        },
        dna: {
            set: {
                autocomplete: 'off',
                name: 'password'
            }
        },
        data: {
            init: {
                value: ''
            }
        },
        context: props.context,
        fn: {
            onKeyUp(payload) {
                payload.data.selector = `ui['package.core.auth'].web.LoginForm.db.user.secret`
                dispatchStore(FSA(ON_KEY_UP, false, payload, props.meta))
            }
        }
    }

    /**
     * ButtonElement__submit
     */

    bio.ButtonElement__submit = {
        meta: {
            '@dna': `${props.meta['@dna']}.elements[1:ButtonElement__submit]`,
            '@component': "['package.core.ui'].web.elements.ButtonElement",
            name: 'ButtonElement__submit',
            class: 'ButtonElement',
            kind: 'element'
        },
        dna: {
            set: {
                icon: 'fa-home',
                label: 'Login',
                buttonType: 'button'
            },
            ui: {}
        },
        data: {
            init: {
                value: ''
            }
        },
        context: props.context,
        fn: {
            onClick(payload) {
                payload.data.selector = `ui['package.core.auth'].web.LoginForm.db.user.secret`
                dispatchStore(FSA(AUTHENTICATE_USER, false, payload, props.meta))
            }
        }
    }

    /**
     * PaymentMethodElement__pay
     */

    bio.PaymentMethodElement__pay = {
        meta: {
            '@dna': `${props.meta['@dna']}.elements[2:PaymentMethodElement__pay]`,
            '@component': "['package.core.commerce'].web.PaymentMethodElement",
            name: 'PaymentMethodElement__pay',
            class: 'PaymentMethodElement',
            kind: 'element'
        },
        dna: {
            set: {
                icon: 'fa-home',
                publishableKey: 'pk_test_rZKTp2SyMW4IR5TrH4Ybzk0X00rPQzyC4H'
            }
        },
        data: {
            init: {
                paymentMethod: state.value,
                paymentMeta: {
                    name: '',
                    email: '',
                    locale: 'nlBE',
                    orderId: '',
                    engagementId: ''
                }
            }
        },
        context: props.context,
        fn: {
            onClick(payload) {
                dispatch(['on_change', {value: 'paypal'}])
                dispatchStore(FSA('SEND_PAYMENT', false, payload, props.meta))
            }
        }
    }

    /**
     * TextInputElement__name
     */

    bio.TextInputElement__name = {
        meta: {
            '@dna': `${props.meta['@dna']}.elements[0:TextInputElement__name]`,
            '@component': "['package.core.ui'].web.elements.TextInputElement",
            name: 'TextInputElement__name',
            class: 'TextInputElement',
            kind: 'element'
        },
        data: {
            init: {
                value: ''
            }
        },
        context: props.context,
        fn: {
            onKeyUp(payload) {
                payload.data.selector = `ui['package.core.cms'].web.selector`
                dispatchStore(FSA(ON_KEY_UP, false, payload, props.meta))
            }
        }
    }

    /**
     * Render
     */
    const {css, motion} = props.context.theme.render(props)

    console.log('RENDER BLOCK: LoginForm', motion)

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

            <Cell {...bio.Cell__loginConfirm}>
                <TextInputElement {...bio.TextInputElement__passwordConfirm} />
            </Cell>
            <TextInputElement {...bio.TextInputElement__passwordConfirm} />
            <ButtonElement {...bio.ButtonElement__submit} />
            <PaymentMethodElement {...bio.PaymentMethodElement__pay} />
        </LoginFormStyled>
    )
}
