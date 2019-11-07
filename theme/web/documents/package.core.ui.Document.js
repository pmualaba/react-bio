import {css} from 'styled-components'

export default {
    variants: {
        default: {
            css: css`
                --styled: '/theme/web/documents/package.core.ui.Document.js';
            `
        }
    },
    context: {
        classification: {
            products: {css: css``}
        },
        region: {'region@dna': {css: css``}},
        regionSize: {
            S: {
                css: css`
                    .M {
                        color: #0f0;
                    }
                `
            },
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
