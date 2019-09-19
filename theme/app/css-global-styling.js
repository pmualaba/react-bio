import {createGlobalStyle} from 'styled-components'

const CSSglobalStyling = createGlobalStyle`
    :root {
    }
    
    .light {
    }

    .dark {
    }

    body {
        color:blue !important;
        letter-spacing: 0;
        line-height: 1.5;
    }

    h1 {
        font-size: 30px;
        line-height: 1.3;
        font-weight: 700;
        letter-spacing: 1px;
    }

    h2 {
        font-weight: 400;
        margin: 3px 0 5px;
    }

    h3 {
        font-weight: 400;
        text-transform: capitalize;
        margin: 10px 0 2px;
    }

    p {
        font-weight: 300;
    }

    .xs {
        font-size: 14px;
        line-height: 1.2;
        font-weight: 300;
        letter-spacing: 2px;
    }
`
export default CSSglobalStyling
