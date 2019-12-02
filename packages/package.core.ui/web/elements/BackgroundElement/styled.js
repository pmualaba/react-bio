import styled from 'styled-components'

const BackgroundElementStyled = styled('div').attrs(props => ({
    'data-kind': 'element',
    'data-component': `${props.meta.class}`,
    'data-rna': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    className: `element ${props.meta.class} ${props.dna.ui['theme.style.class'] || ''}`
}))`
    --styled: 'packages/package.core.ui/web/elements/BackgroundElement/styled.js';

    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background: ${props => `url(${props.data.backgrounds[0].url})`} 0 0 no-repeat;
    background-size: cover;
    transform: rotate(180deg);

    ${props => props.css};
`
export default BackgroundElementStyled
