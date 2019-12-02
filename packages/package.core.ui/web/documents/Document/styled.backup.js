import styled from 'styled-components'

const DocumentStyled = styled('div').attrs(props => ({
    'data-kind': 'document',
    'data-component': `${props.meta.class}`,
    'data-rna': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    className: `${props.meta.class} ${props.dna.ui['theme.style.class'] || ''}`
}))`
    --styled: '/packages/package.core.ui/web/documents/Document/styled.js';

    position: relative;
    height: ${props => (props.dna.set.viewport === 'viewport' ? '100vh' : '100%')};
    width: ${props => (props.dna.set.viewport === 'viewport' ? '100vw' : '100%')};
    overflow: ${props => (props.dna.set.viewport === 'viewport' ? 'hidden' : 'auto')};
    overflow-x: hidden;
    background-color: ${props => props.dna.set.backgroundColor};
    z-index: -2;

    ${props => props.css};
`
export default DocumentStyled
