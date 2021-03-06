import styled from 'styled-components'

const DocumentStyled = styled('div').attrs(props => ({
    'data-kind': 'document',
    'data-component': `${props.meta.class}`,
    'data-rna': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    className: `${props.meta.class} ${props.dna.ui['theme.style.class'] || ''}`
}))`
    --styled: '/packages/package.core.ui/web/documents/Document/styled.js';
    min-height: calc(100vh - 2 * var(--default-spacial-open-padding-document));

    ${props => props.css};
`
export default DocumentStyled
