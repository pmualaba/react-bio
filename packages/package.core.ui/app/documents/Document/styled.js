import styled from 'styled-components'

const DocumentStyled = styled('div').attrs(props => ({
    'data-kind': 'document',
    'data-component': `${props.meta.class}`,
    'data-rna': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    style: props.dna.ui['theme.style.css'],
    className: `${props.meta.class} ${props.dna.ui['theme.style.class'] ? props.dna.ui['theme.style.class'] : ''}`
}))`
    --styled: '/packages/package.core.ui/web/documents/Document/styled.js';
    ${props => props.css};

    height: ${props => (props.dna.set.viewport === 'viewport' ? '100vh' : '100%')};
    width: ${props => (props.dna.set.viewport === 'viewport' ? '100vw' : '100%')};
    overflow: ${props => (props.dna.set.viewport === 'viewport' ? 'hidden' : 'auto')};
    overflow-x: hidden;
`
export default DocumentStyled
