import React from 'react'
import get from 'lodash/get'
import axios from 'axios'
import FSA, {SET_CURRENT_ROUTE, SET_INITIAL_PROPS} from '../../../../packages/package.core.global/web/actions'
import registry from '../../../../dna/registry.web'

const env = require('../../../../env.client')()

export default function Page(props) {
    const GlobalComponent = get(registry, props.dna.global.meta['@component'])
    const DocumentComponent = get(registry, props.dna.document.meta['@component'])
    const LayoutComponent = get(registry, props.dna.document.layouts[0].meta['@component'])

    return (
        <GlobalComponent meta={props.dna.global.meta} dna={props.dna.global.props} skins={props.skins}>
            <DocumentComponent meta={props.dna.document.meta} dna={props.dna.document.props} layouts={props.dna.document.layouts} data={props.data}>
                <LayoutComponent meta={props.dna.document.layouts[0].meta} dna={props.dna.document.layouts[0].props} regions={props.dna.document.layouts[0].regions} />
            </DocumentComponent>
        </GlobalComponent>
    )
}

Page.getInitialProps = async function(ctx) {
    /**
     * Server side ACTION: SET_CURRENT_ROUTE
     */
    ctx.store.dispatch(FSA(SET_CURRENT_ROUTE, false, {url: ctx.asPath}))

    const {data} = await axios.post(`${env.BASE_URL}/api/cms/web`, {
        type: 'GET_INITIAL_PROPS',
        payload: {
            url: ctx.asPath
        },
        error: false,
        meta: {
            '@dna': `${Page.DNA}.props.actions`,
            package: 'package.core.cms'
        }
    })

    console.log('DATA', data)

    // ctx.store.dispatch(FSA(SET_INITIAL_PROPS, false, {db: normalized}))

    return {
        dna: {
            global: ctx.req.db.json.dna.get('["package.core.global"].web.global').value(),
            document: ctx.req.db.json.dna.get(Page.DNA).value()
        },
        data,
        skins: ctx.req.db.json.theme.get('skins.web').value()
    }
}

/**
 * Inject Page DNA
 */
Page.DNA = '["package.core.cms"].web.documents.home'
