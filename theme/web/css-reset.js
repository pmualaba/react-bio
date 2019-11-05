import {css} from 'styled-components'

const scrollBar = {
    color: 'rgba(0,0,0,0.3)',
    width: '5px',
    guideWidth: '5px',
    guideColor: 'rgba(0,0,0,0.1)'
}

const CSSreset = props => css`
    :root {
        --styled: '/theme/web/css-global-reset.js';
        font-size: 62.5%; /* 62.5% of 16px Browser default font-size => Result: 1rem == 10px */
        height: auto;
        width: 100%;
    }
    
    body {
        --styled: '/theme/web/css-global-reset.js';
        font-size: ${props.context.device.fontSize};
        color: var(--default-tone-default-text);
        font-family: var(--default-typography-default-font-primary);
        height: auto;
        width: 100%;
        letter-spacing: 0;
        line-height: 1.5;
    }

    #__next {
        height: inherit;
        width: 100%;
    }

    *,
    *::before,
    *::after {
        --styled: '/theme/web/css-global-reset.js';
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        --styled: '/theme/web/css-global-reset.js';
        text-decoration: none;
        
    }
    a:hover {
        text-decoration: underline;
    }
    a:link, a:visited {
        color: var(--default-tone-default-link);
        font-size: 0.8em;
    }

    li {
        --styled: '/theme/web/css-global-reset.js';
        list-style: none;
    }

    input,
    textarea {
        --styled: '/theme/web/css-global-reset.js';
        
    }
    input:focus, textarea:focus {
        outline: none;
    }
    
    h1 {
        --styled: '/theme/web/css-global-reset.js';
        font-weight: var(--default-typography-default-font-weight-h1);
    }

    h2 {
        --styled: '/theme/web/css-global-reset.js';
        font-weight: var(--default-typography-default-font-weight-h2);
    }

    h3 {
        --styled: '/theme/web/css-global-reset.js';
        font-weight: var(--default-typography-default-font-weight-h3);
    }
    

    // RESET CHROME/SAFARI SCROLLBAR

   /* ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    ::-webkit-scrollbar-track {
        margin: 5px;
    }

    ::-webkit-scrollbar-corner {
        background: ${scrollBar.guideColor};
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 0;
        background: ${scrollBar.color};
    }

    ::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.9);
    }

    //CUSTOM SCROLLBAR
    .custom-scroll {
        min-height: 0;
        min-width: 0;
    }
    .custom-scroll .outer-container {
        overflow: hidden;
        position: relative;
    }
    .custom-scroll .outer-container:hover .custom-scrollbar {
        opacity: 1;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
    }
    .custom-scroll .inner-container {
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .custom-scroll .inner-container:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        height: 0;
        background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.05) 60%, transparent 100%);
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.05) 60%, transparent 100%);
        pointer-events: none;
        -webkit-transition: height 0.1s ease-in;
        transition: height 0.1s ease-in;
        will-change: height;
    }
    .custom-scroll .inner-container.content-scrolled:after {
        height: 5px;
        -webkit-transition: height 0.15s ease-out;
        transition: height 0.15s ease-out;
    }
    .custom-scroll.scroll-handle-dragged .inner-container {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .custom-scroll .custom-scrollbar {
        position: absolute;
        height: 100%;
        width: ${scrollBar.guideWidth};
        background: ${scrollBar.guideColor};
        right: 0;
        opacity: 0;
        z-index: 1;
        -webkit-transition: opacity 0.4s ease-out;
        transition: opacity 0.4s ease-out;
        padding: 6px 0;
        box-sizing: border-box;
        will-change: opacity;
        pointer-events: none;
    }
    .custom-scroll .custom-scrollbar.custom-scrollbar-rtl {
        right: auto;
        left: 3px;
    }
    .custom-scroll.scroll-handle-dragged .custom-scrollbar {
        opacity: 1;
    }
    .custom-scroll .custom-scroll-handle {
        position: absolute;
        width: ${scrollBar.width};
        left: 0;
        top: 0;
    }
    .custom-scroll .inner-handle {
        height: calc(100% - 0px);
        margin-top: 0;
        background-color: ${scrollBar.color};
        border-radius: 0;
    } */
`
export default CSSreset
