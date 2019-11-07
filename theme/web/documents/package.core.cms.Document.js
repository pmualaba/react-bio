import {css} from 'styled-components'

export default {
    variants: {
        default: {
            css: css`
                .Region {
                    &.header {
                        transition: background-color 3s;
                    }
                }
            `
        },
        asBlogPost: {css: css``},
        asHomeBenefits: {css: css``},
        asHomeBenefitsItem: {css: css``},
        asHomeHero: {css: css``}
    },
    context: {
        classification: {
            products: {css: css``}
        },
        region: {
            "['package.core.cms'].web.documents.home.layouts.BaseLayout.regions.main": {css: css``}
        },
        regionSize: {
            S: {css: css``},
            M: {css: css``},
            L: {css: css``}
        },
        screenSize: {
            S: {css: css``},
            M: {css: css``},
            L: {css: css``}
        }
    }
}
