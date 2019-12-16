import * as React from 'react'
import {RenderPage, getInitialProps} from '../../_page'
import {NextPage} from "next"

const Page: NextPage<{ props: object }> = (props) => {
    return RenderPage(props)
}

Page.getInitialProps = async function(ctx) {
    return getInitialProps(ctx, Page)
}

/**
 * Inject Page DNA
 */

Page.DNA = "['package.core.cms'].web.documents.home"

export default Page
