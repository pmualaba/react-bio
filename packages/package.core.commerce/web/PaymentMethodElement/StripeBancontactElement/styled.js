import styled from 'styled-components'

const StripeBancontactElementStyled = styled('div').attrs(props => ({
    'data-kind': 'element'
}))`
    --styled: '/packages/package.core.commerce/web/PaymentMethodElement/StripeBancontactElement/styled.js';

    width: 300px;
    border: 1px solid black;
    padding: 20px;

    .CardField-number-fakeNumber-last4 {
        color: red;
    }

    ${props => props.css};
`
export default StripeBancontactElementStyled
