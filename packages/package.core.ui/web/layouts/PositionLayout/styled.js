import styled from 'styled-components'

const PositionLayoutStyled = styled('main').attrs(props => ({
    'data-kind': 'layout',
    'data-component': `${props.meta.class}:${props.meta['@layout']}`,
    'data-rna': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    className: `layout ${props.meta['@layout']} ${props.dna.ui['theme.style.class'] || ''}`
}))`
    --styled: '/packages/package.core.ui/web/layouts/PositionLayout/styled.js';

    min-height: calc(100vh - 2 * var(--default-spacial-open-padding-document));
    position: relative;

    > .Region {
        --styled: '/packages/package.core.ui/web/layouts/PositionLayout/styled.js ';
        display: flex;
    }

    > .main {
        --styled: '/packages/package.core.ui/web/layouts/PositionLayout/styled.js';
        overflow: auto;
    }

    ${props => props.css};
`
export default PositionLayoutStyled
