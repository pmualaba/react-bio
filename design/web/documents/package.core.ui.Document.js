import {css} from 'styled-components'

const cssDefault = css`
    --styled: '/design/web/documents/package.core.ui.Document.js';
    
    box-shadow: var(--default-spacial-open-shadow);
`
const cssLogin = css`
    --styled: '/design/web/documents/package.core.ui.Document.js';
    box-shadow: rgba(30, 21, 61, 0.86) 0 5px 30px 0;
    background-size: cover;
`
const motionFastFadeIn = {}

export default {
    variants: {
        default: {
            css: cssDefault,
            motion: {
                variants: {
                    initial: {scale: 0.96, y: 30, opacity: 0},
                    enter: {
                        scale: 1,
                        y: 0,
                        opacity: 1,
                        transition: {duration: 1, ease: [0.48, 0.15, 0.25, 0.96]}
                    },
                    exit: {
                        scale: 0.6,
                        y: 100,
                        opacity: 0,
                        transition: {duration: 1, ease: [0.48, 0.15, 0.25, 0.96]}
                    }
                },
                as: 'div'
            },
            SubComponent: {
                css: {},
                motion: {}
            }
        },
        login: {
            css: cssLogin,
            motion: props => ({
                variants: {
                    initial: {scale: 0.96, y: 30, opacity: 0},
                    enter: {
                        scale: 1,
                        y: 0,
                        opacity: 1,
                        transition: {duration: 1, ease: [0.48, 0.15, 0.25, 0.96]}
                    },
                    exit: {
                        scale: 0.6,
                        y: 100,
                        opacity: 0,
                        transition: {duration: 1, ease: [0.48, 0.15, 0.25, 0.96]}
                    }
                },
                as: 'div'
            })
        }
    },
    context: {
        classification: {
            products: {css: css``}
        },
        region: {'region@dna': {css: css``}},
        regionSize: {
            S: {
                css: css`
                    .M {
                        color: #0f0;
                    }
                `
            },
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
