import {css} from 'styled-components'

function CSS(props) {
    const metaTheme = props.meta['@theme'] || props.meta['@component']

    const variant = props.dna.ui['theme.design.variant'] || 'default'
    const designPrefix = metaTheme.split('].')
    const designSuffix = designPrefix[1].split('.')
    const design =
        props.context.theme.design[designPrefix[0].slice(2, -1)][designSuffix[0]][designSuffix[1]][
            designSuffix[2]
        ] || {}

    const screenSize = design.variants ? props.context.device.screenSize : null
    return design.variants
        ? [
              (screenSize === 'S' && design.context.screenSize.S.css) || '',
              (screenSize === 'M' && design.context.screenSize.M.css) || '',
              (screenSize === 'L' && [
                  design.context.screenSize.M.css,
                  design.context.screenSize.L.css
              ]) ||
                  '',
              (screenSize === 'XL' && [
                  design.context.screenSize.M.css,
                  design.context.screenSize.L.css,
                  design.context.screenSize.XL ? design.context.screenSize.XL.css : ''
              ]) ||
                  '',
              (screenSize === 'XXL' && [
                  design.context.screenSize.M.css,
                  design.context.screenSize.L.css,
                  design.context.screenSize.XL ? design.context.screenSize.XL.css : '',
                  design.context.screenSize.XXL ? design.context.screenSize.XXL.css : ''
              ]) ||
                  '',
              design.variants[variant].css || '',
              props.context.classification.reduce(
                  (css, term) => css.concat(design.context.classification[term].css || ''),
                  ''
              ),
              props.own ? design.context.region[props.own.region || 'region@dna'].css : '',
              props.own ? design.context.regionSize[props.own.regionSize || 'S'].css : ''
          ]
        : ''
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

export default CSS
