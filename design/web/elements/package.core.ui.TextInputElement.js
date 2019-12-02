import {css} from 'styled-components'

export default {
    variants: {
        default: {
            css: css``,
            motion: {
                variants: {
                    enter: {x: 0},
                    exit: {x: -500}
                }
            }
        },
        login: {
            css: css``,
            motion: {
                variants: {
                    enter: {x: -100},
                    exit: {x: 100}
                }
            }
        }
    },
    context: {
        screenSize: {
            S: {css: css``},
            M: {css: css``},
            L: {css: css``}
        },
        regionSize: {
            S: {css: css``},
            M: {css: css``},
            L: {css: css``}
        },
        region: {
            'region@dna': {css: css``}
        },
        classification: {
            product: {css: css``}
        }
    }
}
