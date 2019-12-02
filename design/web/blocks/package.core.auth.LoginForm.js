import {css} from 'styled-components'

export default {
    variants: {
        default: {
            css: css``,
            motion: {
                initial: 'exit',
                animate: 'enter',
                onAnimationComplete: e =>
                    (document.querySelector('.Region.main').style.overflowX = 'hidden'),
                exit: 'exit',
                variants: {
                    enter: {
                        y: -100,
                        opacity: 1,
                        transition: {
                            duration: 5,
                            ease: [0.175, 0.85, 0.42, 0.96],
                            staggerChildren: 0.5
                        }
                    },
                    exit: {
                        y: 150,
                        opacity: 0,
                        transition: {
                            duration: 5,
                            ease: [0.175, 0.85, 0.42, 0.96],
                            staggerChildren: 0.5
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
