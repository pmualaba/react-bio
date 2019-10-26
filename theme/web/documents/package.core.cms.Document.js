import {css} from 'styled-components'

export default {
    variants: {
        default: css`
            .Region {
                &.header {
                    transition: background-color 3s;
                }
            }
        `,
        asBlogPost: css``,
        asHomeBenefits: css``,
        asHomeBenefitsItem: css``,
        asHomeHero: css``
    },
    context: {
        taxonomy: {
            products: css``
        },
        region: {
            "['package.core.cms'].web.documents.home.layouts.BaseLayout.regions.main": css``
        },
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
