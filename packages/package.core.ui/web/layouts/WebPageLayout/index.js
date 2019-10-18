import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Region from '../Region'

const WebPageLayoutStyled = styled('div').attrs(props => ({
    'data-kind': 'layout',
    'data-component': `${props.meta.class}:${props.dna.set.renderLayout}`,
    'data-registry': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    className: `${props.dna.set.renderLayout} layout grid ${props.dna.ui && props.dna.ui.theme.decorateClass ? props.dna.ui.theme.decorateClass : ''}`
}))`
    width: 100%;
    height: 100%;

    display: block;

    > .Region {
        display: flex;
        background-color: greenyellow;
        padding: 12rem;
        color: black;
        font-size: 3rem;
        font-family: sans-serif;
        border: 1px solid #fff;
    }

    > .header {
        grid-area: header;
    }

    > .sidebar-left {
        grid-area: sidebar-left;
    }

    > .sidebar-right {
        grid-area: sidebar-right;
    }

    > .sidebar-right-top {
        grid-area: sidebar-right-top;
    }

    > .main {
        grid-area: main;
        padding: 0;
    }

    > .footer {
        grid-area: footer;
    }

    ${props => props.theme.CSS(props)};
`

function WebPageLayout(props) {
    return (
        <WebPageLayoutStyled meta={props.meta} dna={props.dna}>
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
    return <div>WebPageBody</div>
}
function WebPageFooter(props) {
    return <div>WebPageFooter</div>
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
