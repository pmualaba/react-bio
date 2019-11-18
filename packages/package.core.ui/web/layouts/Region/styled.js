import styled from 'styled-components'

const RegionStyled = styled('section').attrs(props => ({
    'data-kind': 'region',
    'data-component': `Region:${props.meta.name}`,
    'data-rna': "['package.core.ui'].web.layouts.Region",
    'data-dna': `${props.meta['@dna']}`,
    'aria-label': props.dna.a11y && props.dna.a11y.label,
    role: props.dna.a11y && props.dna.a11y.role,
    className: `Region ${props.meta.name} ${(props.dna.ui && props.dna.ui['theme.style.class']) ||
        ''}`
}))``

export default RegionStyled
