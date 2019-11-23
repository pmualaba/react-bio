import styled from 'styled-components'

/**
 * Styled Component
 */

const PageFooterStyled = styled('article').attrs(props => {
    return {
        'data-kind': 'block',
        'data-component': `${props.meta.class}`,
        'data-rna': `${props.meta['@component']}`,
        'data-dna': `${props.meta['@dna']}`,
        style: props.dna.ui['theme.style.css'],
        className: `${props.meta.class} ${props.dna.ui['theme.style.class'] || ''}`
    }
})`
    --styled: '/packages/package.core.ui/web/blocks/PageFooter/styled.js';
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;

    .PageFooter__link {
        display: inline-block;
    }

    ${props => props.css};
`
export default PageFooterStyled
