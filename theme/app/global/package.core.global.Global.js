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
                font-family: ${props => props.theme.skin.default.typography.sans.primaryFont};
            `,
            M: css`
                position: relative;
                font-family: ${props => props.theme.skin.default.typography.sans.primaryFont};
            `,
            L: css`
                position: relative;
                font-family: ${props => props.theme.skin.default.typography.sans.primaryFont};
            `,
            XL: css`
                position: static;
                font-family: ${props => props.theme.skin.default.typography.sans.primaryFont};
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
