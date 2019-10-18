import styled from 'styled-components'

const GlobalStyled = styled('div').attrs(props => ({
    'data-kind': 'global',
    'data-component': `${props.meta.class}`,
    'data-registry': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    className: `${props.meta.class} ${
        props.dna.ui.theme.decorateClass ? props.dna.ui.theme.decorateClass : ''
    }`,
    style: props.dna.ui.theme.decorateStyle
}))`
    --styled: '/packages/package.core.ui/web/global/Global/styled.js';
    height: 100%;

    ${props => props.theme.CSS(props)};
`
export default GlobalStyled
