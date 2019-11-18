import styled from 'styled-components'

const LoginFormStyled = styled('form').attrs(props => ({
    'data-kind': 'block',
    'data-component': `${props.meta.class}`,
    'data-rna': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    className: `block ${props.meta.class} ${props.dna.ui['theme.style.class'] || ''}`
}))`
    --styled: '/packages/package.core.auth/web/LoginForm/styled.js';

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > .ImageElement {
        width: 8em;
    }

    ${props => props.css};
`
export default LoginFormStyled
