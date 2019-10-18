import styled from 'styled-components'

const WebPageLayoutStyled = styled('main').attrs(props => ({
    'data-kind': 'layout',
    'data-component': `${props.meta.class}:${props.dna.set.renderLayout}`,
    'data-registry': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    className: `${props.dna.set.renderLayout} layout grid ${props.dna.ui && props.dna.ui.theme.decorateClass ? props.dna.ui.theme.decorateClass : ''}`
}))`
    --styled: '/packages/package.core.ui/web/layouts/WebPageLayout/styled.js';

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    > .Region {
        --styled: '/packages/package.core.ui/web/layouts/WebPageLayout/styled.js ';
        background-color: greenyellow;
        color: black;
        font-size: 3rem;
        font-family: sans-serif;
        border: 1px solid #fff;
    }

    > .header {
        --styled: '/packages/package.core.ui/web/layouts/WebPageLayout/styled.js';
        grid-area: header;
    }

    > .sidebar-left {
        --styled: '/packages/package.core.ui/web/layouts/WebPageLayout/styled.js';
        grid-area: sidebar-left;
    }

    > .sidebar-right {
        --styled: '/packages/package.core.ui/web/layouts/WebPageLayout/styled.js';
        grid-area: sidebar-right;
    }

    > .sidebar-right-top {
        --styled: '/packages/package.core.ui/web/layouts/WebPageLayout/styled.js';
        grid-area: sidebar-right-top;
    }

    > .main {
        --styled: '/packages/package.core.ui/web/layouts/WebPageLayout/styled.js';
        grid-area: main;
        padding: 0;
    }

    > .footer {
        --styled: '/packages/package.core.ui/web/layouts/WebPageLayout/styled.js';
        grid-area: footer;
    }

    ${props => props.theme.CSS(props)};
`
export default WebPageLayoutStyled
