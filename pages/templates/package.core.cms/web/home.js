import React from 'react'
import get from 'lodash/get'
import axios from 'axios'
import FSA, {SET_CURRENT_ROUTE, SET_INITIAL_PROPS} from '../../../../packages/package.core.global/web/actions'
import registry from '../../../../dna/registry.web'

const env = require('../../../../env.client')()
const {locale} = require('../../../../env.client')

export default function Page(props) {
    const GlobalComponent = get(registry, props.dna.global.meta['@component'])
    const DocumentComponent = get(registry, props.dna.document.meta['@component'])
    const LayoutComponent = get(registry, props.dna.document.layouts[0].meta['@component'])

    return (
        <GlobalComponent meta={props.dna.global.meta} dna={props.dna.global.genes} context={props.context} skins={props.skins}>
            <DocumentComponent meta={props.dna.document.meta} dna={props.dna.document.genes} data={props.data} layouts={props.dna.document.layouts}>
                <LayoutComponent
                    meta={props.dna.document.layouts[0].meta}
                    dna={props.dna.document.layouts[0].genes}
                    data={props.data}
                    regions={props.dna.document.layouts[0].regions}
                />
            </DocumentComponent>
        </GlobalComponent>
    )
}

Page.getInitialProps = async function(ctx) {
    const Package = Page.DNA.split('"]')[0].substring(2)
    const Platform = Page.DNA.indexOf('web') !== -1 ? 'web' : 'app'
    /**
     * Server side ACTION: SET_CURRENT_ROUTE
     */
    ctx.store.dispatch(FSA(SET_CURRENT_ROUTE, false, {url: ctx.asPath}))

    const {data} = await axios.post(`${env.BASE_URL}/api/package.core.ui/${Platform}`, {
        type: 'GET_INITIAL_PROPS',
        payload: {
            url: ctx.query.url || ctx.asPath,
            locale: ctx.query.locale || locale.default,
            slug: ctx.query.slug || '',
            actions: ctx.req.db.json.dna.get(`${Page.DNA}.genes.actions`).value()
        },
        error: false,
        meta: {
            package: Package
        }
    })

    const props = {
        dna: {
            global: ctx.req.db.json.dna.get(`["package.core.global"].${Platform}.global`).value(),
            document: ctx.req.db.json.dna.get(Page.DNA).value()
        },
        data: {init: null},
        skins: ctx.req.db.json.theme.get(`skins.${Platform}`).value()
    }

    props.data.init = Object.entries(props.dna.document.genes.data.accessors).reduce(
        (value, [key, accessor]) => {
            value.document[key] = get(data.payload, accessor)
            return value
        },
        {document: {}}
    )

    // ctx.store.dispatch(FSA(SET_INITIAL_PROPS, false, {data: normalized}))

    return props
}

/**
 * Inject Page DNA
 */
Page.DNA = '["package.core.cms"].web.documents.home'
