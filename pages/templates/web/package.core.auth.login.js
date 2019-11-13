import React from 'react'
import {RenderPage, getInitialProps} from '../../_page'

export default function Page(props) {
    return RenderPage(props)
}

Page.getInitialProps = async function(ctx) {
    return getInitialProps(ctx, Page)
}

/**
 * Inject Page DNA
 */

Page.DNA = "['package.core.auth'].web.documents.login"
