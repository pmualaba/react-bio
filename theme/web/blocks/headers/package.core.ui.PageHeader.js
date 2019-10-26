import {css} from 'styled-components'

export default {
    variants: {
        default: css`
            h1 {
                --styled: '/theme/web/blocks/headers/package.core.ui.PageHeader.js';
                font-size: 3em;
            }
            h3 {
                --styled: '/theme/web/blocks/headers/package.core.ui.PageHeader.js';
            }
        `
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
        screenSize: {
            S: css``,
            M: css``,
            L: css``
        }
    }
}
