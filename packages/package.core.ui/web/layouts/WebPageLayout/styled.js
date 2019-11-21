import styled from 'styled-components'

const WebPageLayoutStyled = styled('main').attrs(props => ({
    'data-kind': 'layout',
    'data-component': `${props.meta.class}:${props.meta['@layout']}`,
    'data-rna': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    className: `${props.meta['@layout']} layout ${props.dna.ui['theme.style.class'] || ''}`
}))`
    --styled: '/packages/package.core.ui/web/layouts/WebPageLayout/styled.js';

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - 2 * var(--default-spacial-open-padding-document));

    > .Region {
        --styled: '/packages/package.core.ui/web/layouts/WebPageLayout/styled.js ';
        display: flex;
    }

    > .header {
        --styled: '/packages/package.core.ui/web/layouts/WebPageLayout/styled.js';
        flex-direction: column;
    }

    > .sidebar-left {
        --styled: '/packages/package.core.ui/web/layouts/WebPageLayout/styled.js';
    }

    > .sidebar-right {
        --styled: '/packages/package.core.ui/web/layouts/WebPageLayout/styled.js';
    }

    > .sidebar-right-top {
        --styled: '/packages/package.core.ui/web/layouts/WebPageLayout/styled.js';
    }

    > .main {
        --styled: '/packages/package.core.ui/web/layouts/WebPageLayout/styled.js';
    }

    > .footer {
        --styled: '/packages/package.core.ui/web/layouts/WebPageLayout/styled.js';
    }

    ${props => props.css};
`
export default WebPageLayoutStyled
