import React, {Component} from 'react'
import {PayPalButton} from 'react-paypal-button-v2'

export default class Example extends Component {
    render() {
        return (
            <PayPalButton
                amount="0.01"
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                    alert(`Transaction completed by ${details.payer.name.given_name}`)

                    // OPTIONAL: Call your server to save the transaction
                    return fetch('/paypal-transaction-complete', {
                        method: 'post',
                        body: JSON.stringify({
                            orderID: data.orderID
                        })
                    })
                }}
                options={{
                    clientId: 'sb',
                    currency: 'EUR',
                    disableFunding: 'bancontact,sofort,card'
                }}
                style={{
                    // https://developer.paypal.com/docs/archive/checkout/how-to/customize-button/#button-styles
                    size: 'small',
                    height: 25,
                    value: 'small',
                    color: 'silver',
                    shape: 'pill',
                    label: 'pay', // credit, pay, buynow, paypal
                    fundingicons: true,
                    layout: 'horizontal',
                    tagline: false
                }}
                locale="nl_BE"
            />
        )
    }
}
