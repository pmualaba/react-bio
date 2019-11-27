import styled from 'styled-components'

const PaymentMethodElementStyled = styled('div').attrs(props => ({
    'data-kind': 'element',
    'data-component': `${props.meta.class}`,
    'data-rna': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    className: `element ${props.meta.class} ${props.dna.ui['theme.style.class'] || ''}`
}))`
    --styled: '/packages/package.core.commerce/web/PaymentStripeElement/styled.js';

    color: black;

    ${props => props.css};
`
export default PaymentMethodElementStyled
