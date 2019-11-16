import styled from 'styled-components'

const PanelLayoutStyled = styled('div').attrs(props => ({
    'data-kind': 'layout',
    'data-component': `${props.meta.class}:${props.dna.set.renderLayout}`,
    'data-rna': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    className: `${props.dna.set.renderLayout} layout grid ${props.dna.ui['theme.style.class'] || ''}`
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
        display: flex;
        background-color: orangered;
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
        padding: 0;
    }

    > .footer {
        grid-area: footer;
    }

    ${props => props.css};
    --styled: '/packages/package.core.ui/web/layouts/PanelLayout/styled.js';
`
export default PanelLayoutStyled
