import styled from 'styled-components'

const RegionStyled = styled('section').attrs(props => ({
    'data-kind': 'region',
    'data-component': `Region:${props.meta.name}`,
    'data-registry': "['package.core.ui'].web.layouts.Region",
    'data-dna': `${props.meta['@dna']}`,
    className: `Region ${props.meta.name} ${
        props.dna.ui && props.dna.ui.theme.decorateClass ? props.dna.ui.theme.decorateClass : ''
    }`,
    style: props.dna.ui && props.dna.ui.theme.decorateStyle
}))`
    --styled: '/packages/package.core.ui/web/layouts/Region/styled.js';
    height: inherit;

    /*${props => props.theme.CSS(props)};*/
`

export default RegionStyled
