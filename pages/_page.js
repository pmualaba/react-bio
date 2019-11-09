import React from 'react'
import get from 'lodash/get'
import set from 'lodash/set'
import axios from 'axios'
import FSA, {
    SET_CURRENT_ROUTE,
    SET_INITIAL_PROPS
} from '../packages/package.core.global/web/actions'
import components from '../dna/rna/registry.components.web'

const env = require('../env.client')()
const {locale} = require('../env.client')

export default function Page(props) {
    const GlobalComponent = get(components, props.dna.global.meta['@component'])
    const DocumentComponent = get(components, props.dna.document.meta['@component'])
    const LayoutComponent = get(components, props.dna.document.layouts[0].meta['@component'])
    const context = {
        ...props.context,
        environment: props.environment,
        classification:
            (props.data.init.isClassifiedByTaxonomyTerms &&
                props.data.init.isClassifiedByTaxonomyTerms.map(term => term.name)) ||
            []
    }

    return (
        <GlobalComponent
            meta={props.dna.global.meta}
            dna={props.dna.global.genes}
            context={context}
            data={props.data}
            skins={props.skins}
        >
            <DocumentComponent
                meta={props.dna.document.meta}
                dna={props.dna.document.genes}
                context={context}
                data={props.data}
                layouts={props.dna.document.layouts}
            >
                <LayoutComponent
                    meta={props.dna.document.layouts[0].meta}
                    dna={props.dna.document.layouts[0].genes}
                    context={context}
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
    const locale = ctx.asPath.split('/')[1] || ctx.query.locale || locale.default
    const sid = ctx.req.CTX.sid
    /**
     * Server side ACTION: SET_CURRENT_ROUTE
     */
    ctx.store.dispatch(FSA(SET_CURRENT_ROUTE, false, {url: ctx.asPath}))

    async function prepareInitialProps() {
        /**
         * Prepare Page DNA
         */
        console.time('SSR PREPARE PAGE DNA... - _page.js')
        const documentDna = ctx.req.db.json.dna.get(sid + Page.DNA).value()

        const globalDNA = ctx.req.db.json.dna
            .get(`${sid}['package.core.global'].${Platform}.global`)
            .value()

        const globalDna = {
            ...globalDNA,
            genes: globalDNA.dna[`['package.core.global'].${Platform}.global`]
        }

        Object.entries(documentDna.dna).forEach(([key, genes]) => {
            key === Page.DNA
                ? set(documentDna, 'genes', genes)
                : set(
                      documentDna,
                      `${key.replace(`${Page.DNA}.`, '').replace(/:(.*?)]/g, ']')}.genes`,
                      genes
                  )
        })

        delete documentDna.dna
        delete globalDna.dna
        console.timeEnd('SSR PREPARE PAGE DNA... - _page.js')

        /**
         * Get Initial Props
         */
        const {data} = await axios.post(`${env.BASE_URL}/api/package.core.ui/${Platform}`, {
            type: 'GET_INITIAL_PROPS',
            payload: {
                url: ctx.query.url || ctx.asPath,
                locale,
                slug: ctx.query.slug || '',
                actions: documentDna.genes.actions
            },
            error: false,
            meta: {
                package: Package
            }
        })

        const domain = data.payload.actions.GET_DOMAIN.response
        domain.host = ctx.req.CTX.domain

        const props = {
            environment: {
                locale,
                domain,
                node: process.env.NODE_ENV,
                IE: ctx.req.headers['user-agent'].includes('Trident/7'),
                IE10: ctx.req.headers['user-agent'].includes('rv:10'),
                IE11: ctx.req.headers['user-agent'].includes('rv:11')
            },
            dna: {
                global: globalDna,
                document: documentDna
            },
            data: {init: null},
            skins: ctx.req.db.json.theme.get(`skins.${Platform}`).value()
        }

        props.data.init = Object.entries(documentDna.genes.data.accessors).reduce(
            (value, [key, accessor]) => {
                value.document[key] = get(data.payload, accessor)
                return value
            },
            {document: {}}
        )

        // ctx.store.dispatch(FSA(SET_INITIAL_PROPS, false, {data: normalized}))

        return props
    }

    return process.env.NODE_ENV === 'production'
        ? ctx.req.db.json.dna.read() && ctx.req.db.json.theme.read() && prepareInitialProps()
        : ctx.req.db.json.dna.read() && ctx.req.db.json.theme.read().then(prepareInitialProps)
}
