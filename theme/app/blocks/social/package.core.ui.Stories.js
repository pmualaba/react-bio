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
        blockSize: css`
            &.M {
                --styled: "/theme/web/theme.js:['package.core.ui'].web.blocks.Stories.blockSize";
                color: aqua;
            }
            &.L {
                --styled: "/theme/web/theme.js:['package.core.ui'].web.blocks.Stories.blockSize";
                color: blueviolet;
            }
        `,
        screenSize: {
            S: css`
                &.M {
                    --styled: "/theme/web/theme.js:['package.core.ui'].web.blocks.Stories.screenSize.S";
                    color: yellow;
                }
            `,
            M: {css: css``},
            L: {css: css``}
        }
    }
}
