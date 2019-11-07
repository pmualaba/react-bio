import {css} from 'styled-components'

// 'css.SubComponent', motion.SubComponent //

export default {
    variants: {
        default: {
            css: css`
                padding: 40px;
                box-shadow: var(--default-spacial-open-shadow);
            `,
            motion: {
                tag: 'div',
                animate: {
                    scale: 0.5,
                    opacity: 1
                }
            }
        },
        asHomeBenefits: {css: css``},
        asHomeBenefitsItem: {css: css``},
        asHomeHero: {css: css``}
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
                font-family: ${props =>
                    props.context.theme.default.typography.default['font-primary']};
            `
        },
        regionSize: {
            S: {css: css``},
            M: {css: css``},
            L: {css: css``}
        },
        region: {'region@dna': {css: css``}},
        classification: {
            product: css`
                position: fixed;
            `
        }
    }
}
