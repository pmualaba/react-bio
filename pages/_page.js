import React from 'react'
import get from 'lodash/get'
import set from 'lodash/set'
import axios from 'axios'
import components from '../dna/rna/registry.components.web'

import FSA, {
    SET_CURRENT_ROUTE,
    SET_INITIAL_PROPS
} from '../packages/package.core.global/web/actions'

const env = require('../env.client')()
const {locales} = require('../env.client')

console.log('locales', locales)

export function RenderPage(props) {
    console.log('RENDER PAGE')
    const GlobalComponent = get(components, props.dna.global.meta['@component'])
    const DocumentComponent = get(components, props.dna.document.meta['@component'])
    const LayoutComponent = get(components, props.dna.document.layouts[0].meta['@component'])
    const context = {
        ...props.context,
        environment: props.environment,
        i18n: props.i18n,
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

export function getInitialProps(ctx, Page) {
    const Package = Page.DNA.split('"]')[0].substring(2)
    const Platform = Page.DNA.indexOf('web') !== -1 ? 'web' : 'app'
    const lang = ctx.asPath.split('/')[1]
    console.log('locales2', locales)
    const locale = lang.length === 2 ? locales[lang] : ctx.query.locale || locales.default

    async function prepareInitialProps() {
        const sid = ctx.req.CTX.sid
        /**
         * Prepare Page DNA
         */
        console.time('SSR PREPARE MASTER DNA... - _page.js')
        const documentDna = ctx.req.db.json.dna.get(sid + Page.DNA).value()

        const _globalDna = ctx.req.db.json.dna
            .get(`${sid}['package.core.global'].${Platform}.global`)
            .value()

        const globalDna = {
            ..._globalDna,
            genes: _globalDna.dna[`['package.core.global'].${Platform}.global`]
        }

        documentDna.dna &&
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
        console.timeEnd('SSR PREPARE MASTER DNA... - _page.js')

        /**
         * Get Initial Props
         */
        const getInitialPropsResponse = await axios.post(
            `${env.BASE_URL}/api/package.core.ui/${Platform}`,
            {
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
            }
        )

        const i18n = getInitialPropsResponse.data.payload.actions.GET_I18N.response
        const domain = getInitialPropsResponse.data.payload.actions.GET_DOMAIN.response
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
            skins: ctx.req.db.json.theme.get(`skins.${Platform}`).value(),
            i18n
        }

        props.data.init = Object.entries(documentDna.genes.data.accessors).reduce(
            (value, [key, accessor]) => {
                value.document[key] = get(getInitialPropsResponse.data.payload, accessor)
                return value
            },
            {document: {}}
        )

        // ctx.store.dispatch(FSA(SET_INITIAL_PROPS, false, {data: normalized}))

        return props
    }

    async function prepareInitialPropsBrowser() {
        /**
         * ctx:
         * asPath: "/login"
         * isServer: false
         * pathname: "/templates/web/package.core.auth.login"
         * query: {}
         * store
         *
         */

        /**
         * Get Page DNA
         */
        const getPageDnaResponse = await axios.post(
            `${env.BASE_URL}/api/package.core.ui/${Platform}`,
            {
                type: 'GET_PAGE_DNA',
                payload: {
                    locale,
                    dnaKey: Page.DNA
                },
                error: false,
                meta: {
                    package: Package
                }
            }
        )

        /**
         * Get Initial Props
         */
        const getInitialPropsResponse = await axios.post(
            `${env.BASE_URL}/api/package.core.ui/${Platform}`,
            {
                type: 'GET_INITIAL_PROPS',
                payload: {
                    url: ctx.asPath,
                    locale,
                    slug: ctx.query.slug || '',
                    actions: getPageDnaResponse.data.payload.documentDna.genes.actions
                },
                error: false,
                meta: {
                    package: Package
                }
            }
        )

        const i18n = getInitialPropsResponse.data.payload.actions.GET_I18N.response
        const domain = getInitialPropsResponse.data.payload.actions.GET_DOMAIN.response
        domain.host = window.location.hostname

        const props = {
            environment: {
                locale,
                domain,
                node: 'production',
                IE: window.navigator.userAgent.includes('Trident/7'),
                IE10: window.navigator.userAgent.includes('rv:10'),
                IE11: window.navigator.userAgent.includes('rv:10')
            },
            dna: {
                global: getPageDnaResponse.data.payload.globalDna,
                document: getPageDnaResponse.data.payload.documentDna
            },
            data: {init: null},
            skins: getPageDnaResponse.data.payload.theme,
            i18n
        }

        props.data.init = Object.entries(
            getPageDnaResponse.data.payload.documentDna.genes.data.accessors
        ).reduce(
            (value, [key, accessor]) => {
                value.document[key] = get(getInitialPropsResponse.data.payload, accessor)
                return value
            },
            {document: {}}
        )

        // ctx.store.dispatch(FSA(SET_INITIAL_PROPS, false, {data: normalized}))

        return props
    }

    if (ctx.req) {
        /**
         * Server
         */
        ctx.store.dispatch(FSA(SET_CURRENT_ROUTE, false, {url: ctx.asPath}))

        return process.env.NODE_ENV === 'production'
            ? ctx.req.db.json.dna.read() && ctx.req.db.json.theme.read() && prepareInitialProps()
            : ctx.req.db.json.dna.read() && ctx.req.db.json.theme.read().then(prepareInitialProps)
    }

    /**
     * Browser
     */
    ctx.store.dispatch(FSA(SET_CURRENT_ROUTE, false, {url: ctx.asPath}))

    return prepareInitialPropsBrowser()
}

export default function Page() {
    return <></>
}
