import styled from 'styled-components'

const DocumentStyled = styled('div').attrs(props => ({
    'data-kind': 'document',
    'data-component': `${props.meta.class}`,
    'data-rna': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    className: `${props.meta.class} ${props.dna.ui['theme.decorate.class'] || ''}`
}))`
    --styled: '/packages/package.core.ui/web/documents/Document/styled.js';
    height: 2000px;
    ${props => props.theme.CSS(props)};
`
export default DocumentStyled
