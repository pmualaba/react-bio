import styled from 'styled-components'

const CustomLayoutStyled = styled('div').attrs(props => ({
    'data-kind': 'layout',
    'data-component': `${props.meta.class}:${props.dna.set.renderLayout}`,
    'data-registry': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    style: props.dna.ui.theme.decorateStyle,
    className: `${props.dna.set.renderLayout} ${props.dna.ui.theme.decorateClass ? props.dna.ui.theme.decorateClass : ''}`
}))`
    .Region {
        padding: 100px;
    }

    ${props => props.theme.CSS(props)};
    --styled: '/packages/package.core.ui/web/layouts/CustomLayout/styled.js';
`
export default CustomLayoutStyled
