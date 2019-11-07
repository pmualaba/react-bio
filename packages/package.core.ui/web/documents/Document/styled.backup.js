import styled from 'styled-components'

const DocumentStyled = styled('div').attrs(props => ({
    'data-kind': 'document',
    'data-component': `${props.meta.class}`,
    'data-rna': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    className: `${props.meta.class} ${props.dna.ui['theme.decorate.class'] || ''}`
}))`
    --styled: '/packages/package.core.ui/web/documents/Document/styled.js';

    position: relative;
    height: ${props => (props.dna.set.viewport === 'viewport' ? '100vh' : '100%')};
    width: ${props => (props.dna.set.viewport === 'viewport' ? '100vw' : '100%')};
    overflow: ${props => (props.dna.set.viewport === 'viewport' ? 'hidden' : 'auto')};
    overflow-x: hidden;
    background-color: ${props => props.dna.set.backgroundColor};
    z-index: -2;
    ::before {
        content: '';
        position: absolute;
        width: 100vh;
        height: 100%;
        top: 80px;
        z-index: -1;
        filter: blur(23px);
        background: ${props => props.dna.set.backgroundImage} 0 0 no-repeat;
        background-size: contain;
        transform: rotate(270deg);
        margin: -110px;
        margin-bottom: -80px;
    }

    ${props => props.context.theme.CSS(props)};
`
export default DocumentStyled
