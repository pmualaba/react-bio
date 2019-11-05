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
        style: props.dna.ui['theme.decorate.style'],
        className: `${props.meta.class} ${props.dna.ui['theme.decorate.class'] || ''}`
    }
})`
    --styled: '/packages/package.core.ui/web/blocks/footers/PageFooter/styled.js';
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;

    .PageFooter__link {
        display: inline-block;
    }

    ${props => props.theme.CSS(props)};
`
export default PageFooterStyled
