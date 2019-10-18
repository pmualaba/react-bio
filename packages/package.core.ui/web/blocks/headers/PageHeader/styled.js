import styled from 'styled-components'

/**
 * Styled Component
 */

const PageHeaderStyled = styled('article').attrs(props => {
    props.url = '/static/domains/my-react-bio-app.org/package.core.cms/img/bio.jpg'
    console.log('test', props.url)
    return {
        'data-kind': 'block',
        'data-component': `${props.meta.class}`,
        'data-registry': `${props.meta['@component']}`,
        'data-dna': `${props.meta['@dna']}`,
        style: props.dna.ui.theme.decorateStyle,
        className: `${props.meta.class} ${props.dna.ui.theme.decorateClass ? props.dna.ui.theme.decorateClass : ''}`
    }
})`
    --styled: '/packages/package.core.ui/web/blocks/headers/PageHeader/styled.js';

    display: flex;
    justify-content: space-between;
    background: ${props => `url(${props.url}) no-repeat`};
    background-size: cover;
    height: 800px;

    ${props => props.theme.CSS(props)};
`
export default PageHeaderStyled
