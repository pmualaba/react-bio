import {css} from 'styled-components'
import components from '../../../dna/rna/registry.components.web'

function render(props, ctx) {
    const context = ctx || props.context
    const metaTheme = props.meta['@theme'] || props.meta['@component']

    let designVariant = props.dna.ui['theme.design.variant'] || 'default'
    const motionVariant = props.dna.ui['theme.motion.variant'] || 'default'
    const contextVariant = context.current && context.current['theme.context.variant']
    const designPrefix = metaTheme.split('].')
    const designSuffix = designPrefix[1].split('.')

    /**
     * context.theme.design[package][platform][kind][component]
     * Bio Debug Message: Component not registered in RNA registry.design.web
     */
    const design =
        context.theme.design[designPrefix[0].slice(2, -1)][designSuffix[0]][designSuffix[1]][
            designSuffix[2]
        ] || {}

    const screenSize = design.variants ? context.device.screenSize : null

    if (design.variants) {
        const motion = {
            ...((typeof design.variants[motionVariant].motion === 'function' &&
                design.variants[motionVariant].motion(props)) ||
                design.variants[motionVariant].motion),
            ...((typeof props.dna.ui['theme.motion.variant'] === 'object' &&
                props.dna.ui['theme.motion.variant']) ||
                undefined)
        }
        motion.as = components.motion[motion.as || 'div']

        if (design.variants[contextVariant]) {
            designVariant = contextVariant
        }

        return {
            css: [
                design.variants[designVariant].css || '',

                screenSize === 'S' && design.context.screenSize.S
                    ? design.context.screenSize.S.css
                    : '',
                screenSize === 'M' && design.context.screenSize.M
                    ? design.context.screenSize.M.css
                    : '',
                (screenSize === 'L' && [
                    design.context.screenSize.M ? design.context.screenSize.M.css : '',
                    design.context.screenSize.L ? design.context.screenSize.L.css : ''
                ]) ||
                    '',
                (screenSize === 'XL' && [
                    design.context.screenSize.M ? design.context.screenSize.M.css : '',
                    design.context.screenSize.L ? design.context.screenSize.L.css : '',
                    design.context.screenSize.XL ? design.context.screenSize.XL.css : ''
                ]) ||
                    '',
                (screenSize === 'XXL' && [
                    design.context.screenSize.M ? design.context.screenSize.M.css : '',
                    design.context.screenSize.L ? design.context.screenSize.L.css : '',
                    design.context.screenSize.XL ? design.context.screenSize.XL.css : '',
                    design.context.screenSize.XXL ? design.context.screenSize.XXL.css : ''
                ]) ||
                    '',

                context.classification.reduce(
                    (css, term) =>
                        css.concat(
                            (design.context.classification &&
                                design.context.classification[term].css) ||
                                ''
                        ),
                    ''
                ),
                props.own
                    ? design.context.region &&
                      design.context.region[props.own.region || 'region@dna'].css
                    : '',
                props.own
                    ? design.context.regionSize &&
                      design.context.regionSize[props.own.regionSize || 'S'].css
                    : ''
            ],
            motion
        }
    }
    console.log(
        `Bio Debug Message: ${metaTheme} is not Registered in RNA OR @theme: ${metaTheme} in DNA is not the correct one`
    )
    return {css: '', motion: {}}
}

export function CSSvariables(skin, skins) {
    const cssVariables = []
    Object.entries(skins[skin]).forEach(([skinVariantName, skinVariant]) => {
        skinVariant &&
            Object.entries(skinVariant).forEach(([dimensionName, dimension]) => {
                dimension &&
                    dimensionName !== 'id' &&
                    dimensionName !== 'name' &&
                    dimensionName !== 'inherits' &&
                    Object.entries(dimension).forEach(
                        ([dimensionVariantName, dimensionVariant]) => {
                            dimensionVariant &&
                                Object.entries(dimensionVariant).forEach(([variable, value]) => {
                                    value &&
                                        cssVariables.push(
                                            `--${skinVariantName}-${dimensionName}-${dimensionVariantName}-${variable}: ${value}`
                                        )
                                })
                        }
                    )
            })
    })
    return css`
        :root {
            ${cssVariables.join(';')};
        }
    `
}

export function getGoogleFonts(families) {
    if (typeof window !== 'undefined') {
        window.WebFontConfig = {
            google: families
        }

        const script = window.document.createElement('script')
        script.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js'
        script.type = 'text/javascript'
        script.async = 'true'
        const s = window.document.getElementsByTagName('script')[0]
        s.parentNode.insertBefore(script, s)
    }
}

export default render
