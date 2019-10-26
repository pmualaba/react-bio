import {css} from 'styled-components'

export default {
    variants: {
        default: css`
            padding: 20px;
        `,
        asHomeBenefits: css``,
        asHomeBenefitsItem: css``,
        asHomeHero: css``
    },
    context: {
        screenSize: {
            S: css`
                --styled: '/theme/web/global/package.core.ui.Global.js';
                &.M {
                    color: #f00;
                }
                position: relative;
                font-family: var(--default-typography-default-font-primary);
            `,
            M: css`
                --styled: '/theme/web/global/package.core.ui.Global.js';
                position: relative;
                font-family: var(--default-typography-default-font-primary);
            `,
            L: css`
                --styled: '/theme/web/global/package.core.ui.Global.js';
                position: relative;
                font-family: var(--default-typography-default-font-primary);
            `,
            XL: css`
                --styled: '/theme/web/global/package.core.ui.Global.js';
                position: static;
                font-family: ${props => props.theme.default.typography.default['font-primary']};
            `
        },
        regionSize: {},
        region: {},
        taxonomy: {
            product: css`
                position: fixed;
            `
        }
    }
}
