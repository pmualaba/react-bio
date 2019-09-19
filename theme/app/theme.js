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
            Global: {
                themeBase: css``
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
                    blogPost: Global,
                    homeBenefits: css``,
                    homeBenefitsItem: css``,
                    homeHero: css``
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
            PersonList: css`

            `,
            Document: css`
                    .Region {
                        &.header {
                            background: ${props=>props.theme.skin[props.dna.ui.theme.skin.variant].tone[props.dna.ui.theme.skin.tone].primaryColor}; // IE11
                            background: var(${`--${props=>props.dna.ui.theme.skin.variant}-tone-${props=>props.dna.ui.theme.skin.tone}-primaryColor`});
                            transition: background-color 2s;
                        }
                    }
                `
            }
        }

}

function CSS(props) {
    if (props.meta['@theme']) {
        if (typeof props.meta['@theme'] === 'string') {
            if (get(props.theme.design, props.meta['@theme'][0]) !== '`') {
                return get(props.theme.design, props.meta['@theme'])
            } else {
                return get(props.theme.design, eval(props.meta['@theme']))
            }
        } else {
            return props.meta['@theme'].map(theme => get(props.theme.design, theme[0] !== '`' ? theme : eval(theme)))
        }
    }
}

export default function(skin, skins) {
    return {
        name: skin,
        skin: skins[skin],
        design,
        CSS
    }
}
