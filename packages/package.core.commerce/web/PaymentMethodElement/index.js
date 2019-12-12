import React, {useReducer, useState} from 'react'
import {useDispatch} from 'react-redux'
import {StripeProvider, Elements} from 'react-stripe-elements'
import {FSA, SEND_PAYMENT_STRIPE} from './reducer'
import PaymentMethodElementStyled from './styled'
import StripeBancontactElement from './StripeBancontactElement'
import StripeCreditCardElement from './StripeCreditCardElement'
import StripeIbanElement from './StripeIbanElement'
import StripeIdealElement from './StripeIdealElement'
import StripeWalletElement from './StripeWalletElement'
import PayPalElement from './PayPalElement'
import {hooks} from '../../../package.core.fn'

/**
 * Reducer
 */

function reducer(state, [type, payload]) {
    switch (type) {
        case 'on_change':
            return {...state, value: payload}
        case 'on_reset':
            return {...state, value: ''}
        default:
            return state
    }
}

function PaymentMethodElement(props) {
    /**
     * Default Props
     */

    // prettier-ignore
    if (!props.dna.ui) { props.dna.ui = {} }
    // prettier-ignore
    if (!props.fn.onValueUpdate) { props.fn.onValueUpdate = () => {} }
    // prettier-ignore
    if (!props.fn.onKeyUp) { props.fn.onKeyUp = () => {} }

    /**
     * Data
     */
    const dispatchStore = useDispatch()
    const [data, selectors, dispatch] = hooks.elements.useDataSelectors(
        props,
        ['paymentMethod', 'paymentMeta'],
        reducer
    )

    console.log('data', data)
    /**
     * PaymentMethodElement__pay
     */
    const bio = {}
    bio.StripeCreditCardElement__creditcard = {
        meta: {
            '@dna': `${props.meta['@dna']}.elements[2:StripeCreditCardElement__creditcard]`,
            '@component': "['package.core.commerce'].web.StripeCreditCardElement",
            name: 'StripeCreditCardElement__creditcard',
            class: 'StripeCreditCardElement',
            kind: 'element'
        },
        dna: {
            set: {
                icon: 'fa-home',
                'ui.button.label': props.dna.set.creditcard['ui.button.label'],
                'ui.variant': props.dna.set.creditcard['ui.variant']
            }
        },
        data: {
            init: {
                paymentMethod: ''
            }
        },
        context: props.context,
        fn: {
            onClick(payload) {
                dispatchStore(FSA(SEND_PAYMENT_STRIPE, false, payload, props.meta))
            }
        }
    }

    bio.StripeBancontactElement__pay = {
        meta: {
            '@dna': `${props.meta['@dna']}.elements[2:StripeBancontactElement__pay]`,
            '@component': "['package.core.commerce'].web.StripeBancontactElement",
            name: 'StripeBancontactElement__pay',
            class: 'StripeBancontactElement',
            kind: 'element'
        },
        dna: {
            set: {
                icon: 'fa-home',
                'ui.button.label': props.dna.set['ui.button.label'],
                autocomplete: 'off',
                returnUrl: props.dna.set.bancontact.returnUrl
            }
        },
        data: {
            init: {
                name: data.paymentMeta.name,
                email: data.paymentMeta.email,
                meta: data.paymentMeta
            }
        },
        context: props.context,
        fn: {
            onClick(payload) {
                dispatchStore(FSA(SEND_PAYMENT_STRIPE, false, payload, props.meta))
            },
            onKeyUp(payload) {
                console.log('onKeyUp')
            }
        }
    }

    /**
     * Render
     */

    console.log(`RENDER ELEMENT: PaymentStripeElement ${props.meta['@dna']}`, props)
    return (
        <PaymentMethodElementStyled
            meta={props.meta}
            dna={props.dna}
            context={props.context}
            style={props.dna.ui['theme.style.css']}
        >
            <StripeProvider apiKey={props.dna.set.stripePublishableKey}>
                <div className="Checkout">
                    <Elements>
                        {{
                            creditcard: (
                                <StripeCreditCardElement
                                    {...bio.StripeCreditCardElement__creditcard}
                                />
                            ),
                            bancontact: (
                                <StripeBancontactElement {...bio.StripeBancontactElement__pay} />
                            ),
                            iban: <StripeIbanElement />,
                            ideal: <StripeIdealElement />,
                            wallet: <StripeWalletElement />
                        }[data.paymentMethod] || <></>}
                    </Elements>
                    {data.paymentMethod === 'paypal' && <PayPalElement />}
                </div>
            </StripeProvider>
        </PaymentMethodElementStyled>
    )
}

PaymentMethodElement.defaultProps = {
    dna: {
        set: {},
        ui: {},
        actions: {}
    },
    data: {},
    fn: {
        onKeyUp: () => {},
        onValueUpdate: () => {}
    }
}

export default PaymentMethodElement
