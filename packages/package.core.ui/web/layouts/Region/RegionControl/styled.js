import styled from 'styled-components'

const RegionControlStyled = styled.div.attrs(props => ({
    at: `${props.at}`,
    component: `${props.component}`
}))`
    display: flex;
    
    /*${props => props.css};*/
    --styled: '/packages/package.core.ui/web/layouts/Region/RegionControl/styled.js';
`

export default RegionControlStyled
