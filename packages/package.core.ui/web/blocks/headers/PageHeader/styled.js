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
        style: props.dna.ui['theme.decorate.style'],
        className: `${props.meta.class} ${props.dna.ui['theme.decorate.class'] || ''}`
    }
})`
    --styled: '/packages/package.core.ui/web/blocks/headers/PageHeader/styled.js';

    ${props => props.theme.CSS(props)};
`
export default PageHeaderStyled
