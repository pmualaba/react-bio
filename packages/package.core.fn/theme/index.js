import {css} from 'styled-components'

function CSS(props) {
    const metaTheme = props.meta['@theme'] || props.meta['@component']

    const variant = props.dna.ui['theme.design.variant'] || 'default'
    const designPrefix = metaTheme.split('].')
    const designSuffix = designPrefix[1].split('.')
    const design =
        props.theme.design[designPrefix[0].slice(2, -1)][designSuffix[0]][designSuffix[1]][
            designSuffix[2]
        ] || {}

    const screenSize = design.variants ? props.context.device.screenSize : null

    return design.variants
        ? [
              (screenSize === 'S' && design.context.screenSize.S) || '',
              (screenSize === 'M' && design.context.screenSize.M) || '',
              (screenSize === 'L' && [design.context.screenSize.M, design.context.screenSize.L]) ||
                  '',
              (screenSize === 'XL' && [
                  design.context.screenSize.M,
                  design.context.screenSize.L,
                  design.context.screenSize.XL
              ]) ||
                  '',
              (screenSize === 'XXL' && [
                  design.context.screenSize.M,
                  design.context.screenSize.L,
                  design.context.screenSize.XL,
                  design.context.screenSize.XXL
              ]) ||
                  '',
              design.variants[variant] || '',
              design.context.taxonomy[props.context.taxonomy] || '',
              design.context.region[props.context.region] || '',
              design.context.regionSize[props.context.regionSize] || '',
              design.context.blockSize || ''
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
