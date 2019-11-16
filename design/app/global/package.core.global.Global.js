import {css} from 'styled-components'

export default {
    variants: {
        default: css`
            display: flex;
        `
    },
    context: {
        screenSize: {
            S: css`
                &.M {
                    color: #f00;
                }
                position: relative;
                font-family: ${props => props.context.theme.skin.default.typography.sans.primaryFont};
            `,
            M: css`
                position: relative;
                font-family: ${props => props.context.theme.skin.default.typography.sans.primaryFont};
            `,
            L: css`
                position: relative;
                font-family: ${props => props.context.theme.skin.default.typography.sans.primaryFont};
            `,
            XL: css`
                position: static;
                font-family: ${props => props.context.theme.skin.default.typography.sans.primaryFont};
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
