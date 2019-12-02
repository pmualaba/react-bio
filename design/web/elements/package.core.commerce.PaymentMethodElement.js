import {css} from 'styled-components'

export default {
    variants: {
        default: {
            css: css``,
            motion: {
                variants: {
                    exit: {
                        y: 350,
                        opacity: 0,
                        transition: {duration: 1.5, ease: [0.175, 0.85, 0.42, 0.96]}
                    },
                    enter: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                            ease: [0.175, 0.85, 0.42, 0.96]
                        }
                    }
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
