import {css} from 'styled-components'

export default {
    variants: {
        default: {
            css: css`
                h1 {
                    --styled: '/design/web/blocks/headers/package.core.ui.PageHeader.js';
                    font-size: 3em;
                }
                h3 {
                    --styled: '/design/web/blocks/headers/package.core.ui.PageHeader.js';
                }
            `
        }
    },
    context: {
        classification: {
            products: {css: css``}
        },
        region: {'region@dna': {css: css``}},
        regionSize: {
            S: {css: css``},
            M: {css: css``},
            L: {css: css``}
        },
        blockSize: {
            css: css`
                &.M {
                    --styled: '/design/web/blocks/headers/package.core.ui.PageHeader.js';
                    color: aqua;
                }
                &.L {
                    --styled: 'design/web/blocks/headers/package.core.ui.PageHeader.js';
                    color: blueviolet;
                }
            `
        },
        screenSize: {
            S: {css: css``},
            M: {css: css``},
            L: {css: css``}
        }
    }
}
