import styled from 'styled-components'

const WebPageLayoutStyled = styled('main').attrs(props => ({
    'data-kind': 'layout',
    'data-component': `${props.meta.class}:${props.dna.set.renderLayout}`,
    'data-rna': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    className: `${props.dna.set.renderLayout} layout ${props.dna.ui['theme.decorate.class'] || ''}`
}))`
    --styled: '/packages/package.core.ui/web/layouts/WebPageLayout/styled.js';

    display: flex;
    flex-direction: column;

    > .Region {
        --styled: '/packages/package.core.ui/web/layouts/WebPageLayout/styled.js ';
    }

    > .header {
        --styled: '/packages/package.core.ui/web/layouts/WebPageLayout/styled.js';
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

    ${props => props.theme.CSS(props)};
`
export default WebPageLayoutStyled
