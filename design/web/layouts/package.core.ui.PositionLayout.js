import {css} from 'styled-components'

export default {
    variants: {
        default: {
            css: css`
                > .main {
                    --styled: '/design/web/layouts/package.core.ui.PositionLayout.js';
                    background: #fff;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 50vw;
                    height: 50vw;
                }
            `
        },
        login: {
            css: css`
                > .main {
                    --styled: '/design/web/layouts/package.core.ui.PositionLayout.js';
                    // background-image: linear-gradient(#c1f5f3, #fff);
                    //  border-bottom: 15px solid transparent;
                    box-shadow: 10px 10px 103px 0px rgb(255, 255, 255);
                    overflow: hidden;
                    // filter: blur(3px);
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    height: 50vw;
                }
            `
        }
    },
    context: {
        classification: {
            products: {css: css``}
        },
        region: {'region@dna': {css: css``}},
        regionSize: {
            S: {css: css``},
            M: {css: css``},
            L: {css: css``}
        },
        screenSize: {
            S: {css: css``},
            M: {css: css``},
            L: {
                css: css`
                    > .main {
                        --styled: '/design/web/layouts/package.core.ui.PositionLayout.js';
                        padding: 0;
                        height: 50vh;
                    }
                `
            }
        }
    }
}
