import styled from 'styled-components'

const ButtonElementStyled = styled('button').attrs(props => ({
    'data-kind': 'element',
    'data-component': `${props.meta.class}`,
    'data-rna': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    className: `element ${props.meta.class} ${props.dna.ui['theme.style.class'] || ''}`
}))`
    --styled: '/packages/package.core.ui/web/elements/ButtonElement/styled.js';

    ${props => props.css};
`
export default ButtonElementStyled
