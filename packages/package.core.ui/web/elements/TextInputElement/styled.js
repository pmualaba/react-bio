import styled from 'styled-components'

const TextInputElementStyled = styled('div').attrs(props => ({
    'data-kind': 'element',
    'data-component': `${props.meta.class}`,
    'data-rna': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    className: `element ${props.meta.class} ${props.dna.ui['theme.style.class'] || ''}`
}))`
    --styled: '/packages/package.core.ui/web/elements/InputTextElement/styled.js';

    position: relative;
    height: 50px;

    > input {
        width: 100%;
    }

    ${props => props.css};
`
export default TextInputElementStyled
