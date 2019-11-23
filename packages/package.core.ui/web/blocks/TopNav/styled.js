import styled from 'styled-components'

/**
 * Styled Component
 */

const TopNavStyled = styled('nav').attrs(props => {
    props.url = '/domains/my-react-bio-app.org/package.core.cms/img/bio.jpg'
    console.log('test', props.url)
    return {
        'data-kind': 'block',
        'data-component': `${props.meta.class}`,
        'data-rna': `${props.meta['@component']}`,
        'data-dna': `${props.meta['@dna']}`,
        style: props.dna.ui['theme.style.css'],
        className: `${props.meta.class} ${props.dna.ui['theme.style.class'] || ''}`
    }
})`
    --styled: '/packages/package.core.ui/web/blocks/TopNav/styled.js';

    display: flex;
    justify-content: space-between;

    ${props => props.css};
`
export default TopNavStyled
