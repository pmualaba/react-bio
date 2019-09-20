import {css} from 'styled-components'
import {get} from 'lodash'

import typography from './css-typography'
import colors from './css-colors'
import effects from './css-effects'
import shapes from './css-shapes'
import {breakpoints} from './css-responsive'

import Global from './global/package.core.global.Global'

// TODO : Build Theme Inheritance Tree

const design = {
    'package.core.global': {
        web: {
            colors: css``,
            effects: css``,
            typography: css``,
            global: {
                Global: {
                    variants: {
                        default: css`
                            position: absolute;

                            .PageSection__content {
                                position: relative;
                            }
                        `
                    },
                    context: {
                        screenSize: {},
                        regionSize: {},
                        region: {},
                        taxonomy: {
                            product: css`
                                position: fixed;
                            `
                        }
                    }
                }
            }
        }
    },
    'package.core.ui': {
        web: {
            typography,
            colors,
            effects,
            shapes,
            documents: {
                DocumentContainer: css``
            },
            layouts: {
                PageSection: {
                    variants: {
                        default: Global,
                        asBlogPost: Global,
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
                },
                BaseLayoutContainer: css``,
                PanelLayout: css``
            }
        }
    },
    'package.core.cms': {
        web: {
            colors: css``,
            effects: css``,
            typography: css``,
            PersonList: css``,
            documents: {
                Document: {
                    variants: {
                        default: css`
                            .Region {
                                &.header {
                                    transition: background-color 3s;
                                }
                            }
                        `,
                        asBlogPost: Global,
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
            }
        }
    }
}

function CSS(props) {
    const metaTheme = props.meta['@theme'] || props.meta['@registry']
    console.log('@THEME', metaTheme)

    const variant = (props.dna.ui.theme.design && props.dna.ui.theme.design.variant) || 'default'
    const themePrefix = metaTheme.split('].')
    const themeSuffix = themePrefix[1].split('.')
    const design = props.theme.design[themePrefix[0].slice(2, -1)][themeSuffix[0]][themeSuffix[1]][themeSuffix[2]]

    if (design && design.variants) {

        return [
            design.variants[variant],
            design.context.taxonomy[props.context.taxonomy] || '',
            design.context.region[props.context.region] || '',
            design.context.regionSize[props.context.regionSize] || '',
            design.context.screenSize[props.context.screenSize] || ''
        ]
    }
}

export default function(skin, skins) {
    console.log('skinName', skin)
    return {
        name: skin,
        skin: skins[skin],
        design,
        CSS
    }
}
