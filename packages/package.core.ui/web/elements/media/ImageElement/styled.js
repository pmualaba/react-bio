import styled from 'styled-components'

/**
 * Styled Component
 */

const ImageElementStyled = styled('figure').attrs(props => {
    return {
        'data-kind': 'element',
        'data-component': `${props.meta.class}`,
        'data-rna': `${props.meta['@component']}`,
        'data-dna': `${props.meta['@dna']}`,
        style: props.dna.ui['theme.style.css'],
        className: `${props.meta.class} ${props.dna.ui['theme.style.class'] || ''}`
    }
})`
    --styled: '/packages/package.core.ui/web/elements/media/Image/styled.js';

    ${props => props.css};
`
export default ImageElementStyled
