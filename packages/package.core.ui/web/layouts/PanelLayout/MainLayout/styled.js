import styled, {keyframes, css} from 'styled-components'

const MainLayoutStyled = styled.div.attrs(props => ({
    at: `${props.at}`,
    component: `${props.component}`
}))`
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: 0;
    grid-template-rows: 10rem 1fr 10rem;
    grid-template-columns: 20rem 1fr 20rem;
    grid-template-areas:
        'sidebar-left   header  sidebar-right'
        'sidebar-left   main    sidebar-right'
        'sidebar-left   footer  sidebar-right';

    > .Region {
        background-color: #615e88;
        padding: 2rem;
        color: white;
        font-size: 3rem;
        font-family: sans-serif;
        border: 1px solid #fff;
    }

    > .header {
        grid-area: header;
    }

    > .sidebar-left {
        grid-area: sidebar-left;
    }

    > .sidebar-right {
        grid-area: sidebar-right;
    }

    > .sidebar-right-top {
        grid-area: sidebar-right-top;
    }

    > .main {
        grid-area: main;
    }

    > .footer {
        grid-area: footer;
    }

    ${props => props.css};
    --styled: '/packages/package.core.ui/web/layouts/PanelLayout/MainLayout/styled.js';
`
export default MainLayoutStyled
