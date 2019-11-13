import {css} from 'styled-components'

export default {
    variants: {
        default: {
            css: css`
                h1 {
                    --styled: '/theme/web/blocks/headers/package.core.ui.PageHeader.js';
                    font-size: 3em;
                }
                h3 {
                    --styled: '/theme/web/blocks/headers/package.core.ui.PageHeader.js';
                }
                a {
                    position: absolute;
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
        screenSize: {
            S: {css: css``},
            M: {css: css``},
            L: {css: css``}
        }
    }
}
