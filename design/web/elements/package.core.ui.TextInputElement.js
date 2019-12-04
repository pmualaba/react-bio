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
        material: {
            css: css`
                margin: 1.5em;
                overflow: hidden;
                .TextInputElement__input {
                    border: none;
                    padding-top: 1em;
                    background: transparent;
                }
                .TextInputElement__input:focus
                    + .TextInputElement__label
                    .TextInputElement__labelText,
                .TextInputElement__input:not(:placeholder-shown)
                    + .TextInputElement__label
                    .TextInputElement__labelText {
                    transform: translateY(-150%);
                    font-size: 0.8em;
                    color: #46bc95;
                }
                .TextInputElement__input:focus + .TextInputElement__label::after,
                .TextInputElement__input:not(:placeholder-shown) + .TextInputElement__label::after {
                    transform: translateX(0%);
                }
                .TextInputElement__label {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    border-bottom: 1px solid #a1a3a7;
                }
                .TextInputElement__label::after {
                    content: '';
                    position: absolute;
                    bottom: -1px;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-bottom: 2px solid #59c595;
                    transform: translateX(-100%);
                    transition: transform 0.3s ease;
                }
                .TextInputElement__labelText {
                    position: absolute;
                    bottom: 5px;
                    left: 0;
                    transition: font-size 0.3s ease;
                }
            `,
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
