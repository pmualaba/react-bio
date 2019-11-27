import React, {useReducer} from 'react'
import {injectStripe} from 'react-stripe-elements'
import StripeBancontactElementStyled from './styled'

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
    const [state, dispatch] = useReducer(reducer, {name: props.name, email: props.email})

    function onClick(e) {
        props.fn.onClick()
        if (props.stripe) {
            props.stripe
                .createSource({
                    type: 'bancontact',
                    currency: 'eur',
                    owner: {
                        ...state,
                        address: null,
                        phone: null
                    },
                    mandate: {
                        notification_method: 'email'
                    },
                    amount: 100,
                    statement_descriptor: null, // orderId max 35char
                    metadata: {
                        locale: 'nlBE',
                        orderId: '',
                        engagementId: ''
                    },

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

    return (
        <StripeBancontactElementStyled>
            <label>
                Name
                <input
                    name="name"
                    type="text"
                    placeholder="Jane Doe"
                    required
                    onChange={e => dispatch(['on_change', {name: e.target.value}])}
                />
            </label>
            <label>
                Email
                <input
                    name="email"
                    type="email"
                    placeholder="jane.doe@example.com"
                    required
                    onChange={e => dispatch(['on_change', {email: e.target.value}])}
                />
            </label>
            <label>BANCONTACT</label>
            <button type="button" onClick={onClick}>
                Betaal met Bancontact
            </button>
        </StripeBancontactElementStyled>
    )
}
export default injectStripe(StripeBancontactElement)
