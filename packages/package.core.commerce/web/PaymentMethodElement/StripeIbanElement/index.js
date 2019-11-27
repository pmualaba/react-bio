import React, {useReducer} from 'react'
import {IbanElement, injectStripe} from 'react-stripe-elements'
import StripeIbanElementStyled from './styled'

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

function StripeIbanElement(props) {
    const [state, dispatch] = useReducer(reducer, {name: '', email: ''})

    function handleBlur() {
        console.log('[blur]')
    }

    function handleChange() {
        console.log('[change]')
    }

    function handleFocus() {
        console.log('[focus]')
    }

    function handleReady() {
        console.log('[ready]')
    }

    function handleClick(e) {
        console.log('state', state)
        if (props.stripe) {
            props.stripe
                .createSource({
                    type: 'sepa_debit',
                    currency: 'eur',
                    owner: state,
                    mandate: {
                        notification_method: 'email'
                    }
                })
                .then(payload => console.log('[source]', payload))
        } else {
            console.log("Stripe.js hasn't loaded yet.")
        }
    }

    const style = {
        base: {
            fontSize: '14px',
            color: '#424770',
            letterSpacing: '0.025em',
            fontFamily: 'Source Code Pro, monospace',
            '::placeholder': {
                color: '#aab7c4'
            }
        },
        invalid: {
            color: 'orange'
        }
    }

    return (
        <StripeIbanElementStyled>
            <label>
                Name
                <input
                    name="name"
                    type="text"
                    placeholder="enter your name..."
                    required
                    onChange={e => dispatch(['on_change', {name: e.target.value}])}
                />
            </label>
            <label>
                Email
                <input
                    name="email"
                    type="email"
                    placeholder="enter your emailaddress..."
                    required
                    onChange={e => dispatch(['on_change', {email: e.target.value}])}
                />
            </label>
            <label>
                IBAN
                <IbanElement
                    supportedCountries={['SEPA']}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onReady={handleReady}
                    style={style}
                />
            </label>
            <button type="button" onClick={handleClick}>
                Pay
            </button>
        </StripeIbanElementStyled>
    )
}
export default injectStripe(StripeIbanElement)
