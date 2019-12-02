import React from 'react'
import {injectStripe} from 'react-stripe-elements'
import {hooks} from '../../../../package.core.fn'
import TextInputElement from '../../../../package.core.ui/web/elements/TextInputElement'
import StripeBancontactElementStyled from './styled'
import {FSA, SEND_PAYMENT_STRIPE} from '../reducer'
import {AUTHENTICATE_USER} from '../../../../package.core.auth/web/LoginForm/reducer'
import LoginFormStyled from '../../../../package.core.auth/web/LoginForm/styled'

/**
 * Reducer
 */

function reducer(state, [type, payload]) {
    switch (type) {
        case 'on_change':
            return {...state, ...payload}
        case 'on_reset':
            return {name: '', email: ''}
        default:
            return state
    }
}

function StripeBancontactElement(props) {
    /**
     * Bio Default Props
     */

    if (!props.dna.ui) {
        props.dna.ui = {}
    }

    /**
     * Data
     */
    const [data, selectors, dispatch] = hooks.elements.useDataSelectors(
        props,
        ['name', 'email', 'meta'],
        reducer
    )

    function onClick(e) {
        props.fn.onClick()
        if (props.stripe) {
            props.stripe
                .createSource({
                    type: 'bancontact',
                    currency: 'eur',
                    owner: {
                        name: data.name,
                        email: data.email,
                        address: null,
                        phone: null
                    },
                    mandate: {
                        notification_method: 'email'
                    },
                    amount: 100,
                    statement_descriptor: null, // orderId max 35char
                    metadata: data.meta,

                    redirect: {
                        return_url:
                            'https://www.palliatief.com/nl/diensten/workshops/ins-outs-van-instagram?orderStatus=PAID&client_secret=src_client_secret_BXQKrQOFLFQljSwvK2p8VwJy&livemode=true&source=src_1BALTmCP974cY7SJGcyj2D8L'
                    }
                })
                .then(payload => console.log('[source]', payload))
        } else {
            console.log("Stripe.js hasn't loaded yet.")
        }
    }

    /**
     * TextInputElement__name
     */
    const bio = {}
    bio.TextInputElement__name = {
        meta: {
            '@dna': `${props.meta['@dna']}.elements[0:TextInputElement__name]`,
            '@component': "['package.core.ui'].web.elements.TextInputElement",
            name: 'TextInputElement__name',
            class: 'TextInputElement',
            kind: 'element'
        },
        dna: {
            set: {
                autocomplete: props.dna.set.autocomplete,
                label: props.context.i18n.identity.name,
                placeholder: props.dna.set.placeholder,
                name: 'name'
            }
        },
        data: {
            init: {
                value: data.name
            }
        },
        context: props.context,
        fn: {
            onKeyUp(payload) {
                dispatch(['on_change', {name: payload.data.value}])
                props.fn.onKeyUp(payload)
            }
        }
    }

    /**
     * TextInputElement__email
     */

    bio.TextInputElement__email = {
        meta: {
            '@dna': `${props.meta['@dna']}.elements[1:TextInputElement__email]`,
            '@component': "['package.core.ui'].web.elements.TextInputElement",
            name: 'TextInputElement__email',
            class: 'TextInputElement',
            kind: 'element'
        },
        dna: {
            set: {
                autocomplete: props.dna.set.autocomplete,
                label: props.context.i18n.identity.email,
                name: 'email'
            }
        },
        data: {
            init: {
                value: data.email
            }
        },
        context: props.context,
        fn: {
            onKeyUp(payload) {
                dispatch(['on_change', {email: payload.data.value}])
                props.fn.onKeyUp(payload)
            }
        }
    }

    /**
     * ButtonElement__submit
     */

    bio.ButtonElement__bancontact = {
        meta: {
            '@dna': `${props.meta['@dna']}.elements[2:ButtonElement__bancontact]`,
            '@component': "['package.core.ui'].web.elements.ButtonElement",
            name: 'ButtonElement__bancontact',
            class: 'ButtonElement',
            kind: 'element'
        },
        dna: {
            set: {
                icon: 'bancontact',
                buttonType: 'button'
            }
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
            }
        }
    }

    console.log(`RENDER ELEMENT: StripeBancontactElement ${props.meta['@dna']}`, props)

    const {css, motion} = props.context.theme.render(props)

    return (
        <StripeBancontactElementStyled
            meta={props.meta}
            dna={props.dna}
            context={props.context}
            css={css}
            {...motion}
        >
            {!data.name ? <TextInputElement {...bio.TextInputElement__name} /> : null}
            {!data.email ? <TextInputElement {...bio.TextInputElement__email} /> : null}

            <button type="button" onClick={onClick}>
                {props.context.i18n.commerce['paymentMethod.bancontact']}
            </button>
        </StripeBancontactElementStyled>
    )
}
export default injectStripe(StripeBancontactElement)
