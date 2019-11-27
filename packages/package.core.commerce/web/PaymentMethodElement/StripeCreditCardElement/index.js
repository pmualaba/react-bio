import React from 'react'
import {
    CardElement,
    CardCVCElement,
    CardExpiryElement,
    CardNumberElement,
    injectStripe
} from 'react-stripe-elements'
import StripeCreditCardElementStyled from './styled'

function StripeCreditCardElement(props) {
    function handleBlur() {
        console.log('[blur]')
    }

    function handleChange(e) {
        console.log('[change]', e)
    }

    function handleFocus() {
        console.log('[focus]')
    }

    function handleReady() {
        console.log('[ready]')
    }

    function handleClick(e) {
        if (props.stripe) {
            props.stripe.createToken().then(payload => console.log('[token]', payload))
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

    if (props.inline) {
        return (
            <StripeCreditCardElementStyled>
                <label>
                    Card details
                    <CardElement
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
            </StripeCreditCardElementStyled>
        )
    }
    return (
        <StripeCreditCardElementStyled>
            <label>
                Card number
                <CardNumberElement
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onReady={handleReady}
                    style={style}
                />
            </label>
            <label>
                Expiration date
                <CardExpiryElement
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onReady={handleReady}
                    style={style}
                />
            </label>
            <label>
                CVC
                <CardCVCElement
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
        </StripeCreditCardElementStyled>
    )
}

export default injectStripe(StripeCreditCardElement)
