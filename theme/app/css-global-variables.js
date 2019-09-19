import {createGlobalStyle} from 'styled-components'

const renderCSSvariables = (skin, skins) => {
    const vars = []
    Object.entries(skins[skin]).forEach(([themeVariantName, themeVariant]) => {
        themeVariant &&
            Object.entries(themeVariant).forEach(([dimensionName, dimension]) => {
                dimension &&
                    dimensionName !== 'id' &&
                    dimensionName !== 'name' &&
                    dimensionName !== 'inherits' &&
                    Object.entries(dimension).forEach(([dimensionVariantName, dimensionVariant]) => {
                        dimensionVariant &&
                            Object.entries(dimensionVariant).forEach(([variable, value]) => {
                                value && vars.push(`--${themeVariantName}-${dimensionName}-${dimensionVariantName}-${variable}: ${value}`)
                            })
                    })
            })
    })
    return vars.join(';')
}

const CSSglobalVariablesHOC = (skin, skins) => createGlobalStyle`
    :root {
      ${renderCSSvariables(skin, skins)} 
    }
    
`
export default CSSglobalVariablesHOC
