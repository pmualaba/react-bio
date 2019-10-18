import {css} from 'styled-components'

function CSS(props) {
    const metaTheme = props.meta['@theme'] || props.meta['@component']

    const variant = props.dna.ui.theme.designVariant || 'default'
    const designPrefix = metaTheme.split('].')
    const designSuffix = designPrefix[1].split('.')
    const design =
        props.theme.design[designPrefix[0].slice(2, -1)][designSuffix[0]][designSuffix[1]][
            designSuffix[2]
        ] || {}

    return design.variants
        ? [
              design.context.screenSize[props.context.device.screenSize] || '',
              design.variants[variant] || '',
              design.context.taxonomy[props.context.taxonomy] || '',
              design.context.region[props.context.region] || '',
              design.context.regionSize[props.context.regionSize] || ''
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
