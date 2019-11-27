import React from 'react'
import {IdealBankElement, injectStripe} from 'react-stripe-elements'
import StripeIdealElementStyled from './styled'

function StripeIdealElement(props) {
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
        if (props.stripe) {
            props.stripe
                .createSource({
                    type: 'ideal',
                    amount: 1099,
                    currency: 'eur',
                    owner: {
                        name: e.target.name.value
                    },
                    redirect: {
                        return_url: 'https://example.com'
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
        <StripeIdealElementStyled>
            <label>
                Name
                <input name="name" type="text" placeholder="Jane Doe" required />
            </label>
            <label>
                iDEAL Bank
                <IdealBankElement
                    className="IdealBankElement"
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
        </StripeIdealElementStyled>
    )
}
export default injectStripe(StripeIdealElement)
