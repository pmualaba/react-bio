import React from 'react'
import get from 'lodash/get'
import FSA, {SET_CURRENT_ROUTE} from '../../../../packages/package.core.global/web/actions'
import registry from '../../../../dna/registry.web'

export default function Page(props) {
    const GlobalComponent = get(registry, props.dna.global.meta['@registry'])
    const DocumentComponent = get(registry, props.dna.document.meta['@registry'])
    const LayoutComponent = get(registry, props.dna.document.layouts.documentLayout.meta['@registry'])

    return (
        <GlobalComponent meta={props.dna.global.meta} dna={props.dna.global.props} skins={props.skins}>
            <DocumentComponent meta={props.dna.document.meta} dna={props.dna.document.props} layouts={props.dna.document.layouts}>
                <LayoutComponent
                    meta={props.dna.document.layouts.documentLayout.meta}
                    dna={props.dna.document.layouts.documentLayout.props}
                    regions={props.dna.document.layouts.documentLayout.regions}
                />
            </DocumentComponent>
        </GlobalComponent>
    )
}

Page.getInitialProps = function(ctx) {
    /**
     * Server side ACTION: SET_CURRENT_ROUTE
     */
    ctx.store.dispatch(FSA(SET_CURRENT_ROUTE, false, {url: ctx.asPath}))

    return {
        skins: ctx.req.db.json.theme.get('skins.web').value(),
        dna: {
            global: ctx.req.db.json.dna.get('["package.core.global"].web.global').value(),
            document: ctx.req.db.json.dna.get(Page.DNA).value()
        }
    }
}

/**
 * Inject Page DNA
 */
Page.DNA = '["package.core.cms"].web.documents.home'
