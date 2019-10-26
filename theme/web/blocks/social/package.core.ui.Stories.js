import {css} from 'styled-components'

export default {
    variants: {
        default: css``
    },
    context: {
        taxonomy: {
            products: css``
        },
        region: {},
        regionSize: {
            S: css``,
            M: css``,
            L: css``
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
            M: css``,
            L: css``
        }
    }
}
