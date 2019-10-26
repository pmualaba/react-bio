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
            S: css`
                .M {
                    color: #0f0;
                }
            `,
            M: css``,
            L: css``
        },
        screenSize: {
            S: css``,
            M: css``,
            L: css``
        }
    }
}
