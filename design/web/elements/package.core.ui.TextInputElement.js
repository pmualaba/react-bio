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
                    --styled: '/design/web/elements/package.core.ui.TextInputElement.js';
                    border: none;
                    padding-top: 2.8em;
                    background: transparent;
                }
                .TextInputElement__input:focus
                    + .TextInputElement__label
                    .TextInputElement__labelText,
                .TextInputElement__input:not(:placeholder-shown)
                    + .TextInputElement__label
                    .TextInputElement__labelText {
                    --styled: '/design/web/elements/package.core.ui.TextInputElement.js';
                    transform: translateY(-150%);
                    font-size: 0.8em;
                    color: #46bc95;
                }
                .TextInputElement__input:focus + .TextInputElement__label::after,
                .TextInputElement__input:not(:placeholder-shown) + .TextInputElement__label::after {
                    --styled: '/design/web/elements/package.core.ui.TextInputElement.js';
                    transform: translateX(0%);
                }
                .TextInputElement__label {
                    --styled: '/design/web/elements/package.core.ui.TextInputElement.js';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    border-bottom: 1px solid #a1a3a7;
                    font-size: 1.6em;
                }
                .TextInputElement__label::after {
                    --styled: '/design/web/elements/package.core.ui.TextInputElement.js';

                    content: '';
                    position: absolute;
                    bottom: -1px;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-bottom: 2px solid #59d1c7;
                    transform: translateX(-100%);
                    transition: transform 0.3s ease;
                }
                .TextInputElement__labelText {
                    --styled: '/design/web/elements/package.core.ui.TextInputElement.js';
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
