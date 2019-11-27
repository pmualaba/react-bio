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
    if (!props.fn.onValueUpdate) { props.fn.onValueUpdate = () => {} }
    // prettier-ignore
    if (!props.fn.onKeyUp) { props.fn.onKeyUp = () => {} }

    /**
     * Data
     */

    const [data, selectors] = hooks.elements.useDataSelectors(props, ['paymentMethod'])
    const [state, dispatch] = useReducer(reducer, data || {value: ''})
    const value = props.meta['@flag.controlled'] ? data.value : state.value
    const dispatchStore = useDispatch()

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
                'ui.button.label': props.dna.set['ui.button.label']
            },
            ui: {}
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
                'ui.button.label': props.dna.set['ui.button.label']
            },
            ui: {}
        },
        data: {
            init: {
                paymentMethod: ''
            }
        },
        context: props.context,
        fn: {
            onClick(payload) {
                props.fn.onClick(payload)
                dispatchStore(FSA(SEND_PAYMENT_STRIPE, false, payload, props.meta))
            }
        }
    }

    /**
     * Render
     */

    console.log(`RENDER ELEMENT: PaymentStripeElement ${props.meta['@dna']}`, props, state)
    return (
        <PaymentMethodElementStyled
            meta={props.meta}
            dna={props.dna}
            context={props.context}
            style={props.dna.ui['theme.style.css']}
        >
            <StripeProvider apiKey="pk_test_rZKTp2SyMW4IR5TrH4Ybzk0X00rPQzyC4H">
                <div className="Checkout">
                    <h1>Payment Methods</h1>
                    <h2>Creditcard</h2>
                    <Elements>
                        {{
                            creditcard: <StripeCreditCardElement />,
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
