import styled from 'styled-components'

const GlobalStyled = styled('div').attrs(props => ({
    'data-kind': 'global',
    'data-component': `${props.meta.class}`,
    'data-rna': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    className: `${props.meta.class} ${
        props.dna.ui['theme.style.class'] ? props.dna.ui['theme.style.class'] : ''
    }`,
    style: props.dna.ui['theme.style.css']
}))`
    --styled: '/packages/package.core.ui/web/global/Global/styled.js';
    height: 100%;

    ${props => props.css};
`
export default GlobalStyled
