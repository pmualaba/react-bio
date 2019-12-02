import {css} from 'styled-components'

export default {
    variants: {
        default: {
            css: css``,
            motion: {
                variants: {
                    enter: {x: 200},
                    exit: {x: -500}
                }
            }
        },
        login: {
            css: css``,
            motion: {
                as: 'div',
                animate: {
                    filter: ['blur(23px)', 'blur(0px)', 'blur(5px)']
                },
                transition: {
                    duration: 3,
                    ease: 'easeInOut'
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
