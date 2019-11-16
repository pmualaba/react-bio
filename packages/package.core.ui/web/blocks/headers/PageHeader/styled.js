import styled from 'styled-components'

/**
 * Styled Component
 */

const PageHeaderStyled = styled('article').attrs(props => {
    return {
        'data-kind': 'block',
        'data-component': `${props.meta.class}`,
        'data-rna': `${props.meta['@component']}`,
        'data-dna': `${props.meta['@dna']}`,
        className: `${props.meta.class} ${props.dna.ui['theme.style.class'] || ''}`
    }
})`
    --styled: '/packages/package.core.ui/web/blocks/headers/PageHeader/styled.js';
    display: block;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    ${props => props.css};
`
export default PageHeaderStyled
