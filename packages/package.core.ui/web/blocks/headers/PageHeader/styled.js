/**
 * Styled Component
 */

const PageHeaderStyled = styled('div').attrs(props => ({
    'data-kind': 'block',
    'data-component': `${props.meta.class}`,
    'data-registry': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    style: props.dna.ui.theme.decorateStyle,
    className: `${props.meta.class} ${props.dna.ui.theme.decorateClass ? props.dna.ui.theme.decorateClass : ''}`
}))`
    ${props => props.theme.CSS(props)};

    display: flex;
`
