import React from 'react'
import PropTypes from 'prop-types'
import WebPageLayoutStyled from './styled'
import Region from '../Region'

function WebPageLayout(props) {
    console.log('WebPageLayout render()', props)

    return (
        <WebPageLayoutStyled meta={props.meta} dna={props.dna} context={props.context}>
            {props.regions.map((region, i) => (
                <Region
                    key={region.meta.name}
                    name={region.meta.name}
                    meta={region.meta}
                    dna={region.genes}
                    data={{init: props.data.init.regions[i]}}
                    context={props.context}
                    blocks={region.blocks}
                    layouts={region.layouts}
                />
            ))}
        </WebPageLayoutStyled>
    )
}

function WebPageHeader(props) {
    return <div>WebPageHeader</div>
}
function WebPageBody(props) {
    return <div />
}
function WebPageFooter(props) {
    return <div />
}

WebPageLayout.WebPageHeader = WebPageHeader
WebPageLayout.WebPageBody = WebPageBody
WebPageLayout.WebPageFooter = WebPageFooter

WebPageLayout.propTypes = {
    meta: PropTypes.object,
    dna: PropTypes.object,
    data: PropTypes.object,
    context: PropTypes.object,
    regions: PropTypes.array
}

export default WebPageLayout
