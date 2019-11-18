import {css} from 'styled-components'
import components from '../../../dna/rna/registry.components.web'

function render(props, ctx) {
    const context = ctx || props.context
    const metaTheme = props.meta['@theme'] || props.meta['@component']

    const variant = props.dna.ui['theme.design.variant'] || 'default'
    const designPrefix = metaTheme.split('].')
    const designSuffix = designPrefix[1].split('.')
    const design =
        context.theme.design[designPrefix[0].slice(2, -1)][designSuffix[0]][designSuffix[1]][
            designSuffix[2]
        ] || {}

    const screenSize = design.variants ? context.device.screenSize : null

    if (design.variants) {
        const motion = {
            ...((typeof design.variants[variant].motion === 'function' &&
                design.variants[variant].motion(props)) ||
                design.variants[variant].motion),
            ...props.dna.ui['theme.skin.motion']
        }
        if (motion.as) {
            motion.as = components.motion[motion.as || 'div']
        }

        return {
            css: [
                design.variants[variant].css || '',

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

export default render
