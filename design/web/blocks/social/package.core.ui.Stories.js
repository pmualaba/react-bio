import {css} from 'styled-components'

export default {
    variants: {
        default: {css: css``}
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
                    --styled: 'design/web/blocks/social/package.core.ui.Stories.js';
                    color: aqua;
                }
                &.L {
                    --styled: 'design/web/blocks/social/package.core.ui.Stories.js';
                    color: blueviolet;
                }
            `
        },
        screenSize: {
            S: {
                css: css`
                    &.M {
                        --styled: 'design/web/blocks/social/package.core.ui.Stories.js';
                        color: yellow;
                    }
                `
            },
            M: {css: css``},
            L: {css: css``}
        }
    }
}
