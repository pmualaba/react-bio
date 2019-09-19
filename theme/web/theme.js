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
            colors: props => css``,
            effects: props => css``,
            typography: props => css``,
            Global: {
                themeBase: props => css`
                    position: relative;
                    .PageSection__content {
                        position: relative;
                        background: var(${`--${props => props.styling.theme}-primary-color`});
                    }
                `
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
                DocumentContainer: props => css``
            },
            layouts: {
                PageSection: {
                    variant: {
                        default: Global,
                        blogPost: Global,
                        homeBenefits: props => css``,
                        homeBenefitsItem: props => css``,
                        homeHero: props => css``
                    },
                    context: {
                        taxonomy: {
                            products: props => css``
                        },
                        region: {
                            "['package.core.cms'].web.documents.home.layouts.BaseLayout.regions.main": props => css``
                        },
                        regionSize: {
                            S: props => css``,
                            M: props => css``,
                            L: props => css``
                        },
                        screenSize: {
                            S: props => css``,
                            M: props => css``,
                            L: props => css``
                        }
                    }
                },
                BaseLayoutContainer: props => css``,
                PanelLayout: props => css``
            }
        }
    },
    'package.core.cms': {
        web: {
            colors: props => css``,
            effects: props => css``,
            typography: props => css``,
            PersonList: props => css`

            `,
            Document: props => {
                return css`
                    .Region {
                        &.header {
                            background: ${props.theme.skin[props.dna.ui.theme.skin.variant].tone[props.dna.ui.theme.skin.tone].primaryColor}; // IE11
                            background: var(${`--${props.dna.ui.theme.skin.variant}-tone-${props.dna.ui.theme.skin.tone}-primaryColor`});
                            transition: background-color 2s;
                        }
                    }
                `
            }
        }
    }
}

function CSS(props) {
    if (props.meta['@theme']) {
        if (typeof props.meta['@theme'] === 'string') {
            if (get(props.theme.design, props.meta['@theme'][0]) !== '`') {
                return get(props.theme.design, props.meta['@theme'])(props)
            } else {
                return get(props.theme.design, eval(props.meta['@theme'])(props))
            }
        } else {
            return props.meta['@theme'].map(theme => get(props.theme.design, theme[0] !== '`' ? theme : eval(theme))(props))
        }
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
