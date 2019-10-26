import styled from 'styled-components'

/**
 * Styled Component
 */

const TopNavStyled = styled('nav').attrs(props => {
    props.url = '/static/domains/my-react-bio-app.org/package.core.cms/img/bio.jpg'
    console.log('test', props.url)
    return {
        'data-kind': 'block',
        'data-component': `${props.meta.class}`,
        'data-rna': `${props.meta['@component']}`,
        'data-dna': `${props.meta['@dna']}`,
        style: props.dna.ui['theme.decorate.style'],
        className: `${props.meta.class} ${props.dna.ui['theme.decorate.class'] || ''}`
    }
})`
    --styled: '/packages/package.core.ui/web/blocks/navigation/TopNav/styled.js';

    display: flex;
    justify-content: space-between;

    ${props => props.theme.CSS(props)};
`
export default TopNavStyled
