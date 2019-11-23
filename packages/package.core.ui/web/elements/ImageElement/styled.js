import styled from 'styled-components'

const ImageElementStyled = styled('figure').attrs(props => ({
    'data-kind': 'element',
    'data-component': `${props.meta.class}`,
    'data-rna': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    className: `${props.meta.class} ${props.dna.ui['theme.style.class'] || ''}`
}))`
    --styled: '/packages/package.core.ui/web/elements/ImageElement/styled.js';

    ${props => props.css};
`
export default ImageElementStyled
