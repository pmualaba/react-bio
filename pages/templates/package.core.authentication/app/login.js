import React from 'react'
import {connect} from 'react-redux'
import FSA, {SET_CURRENT_ROUTE} from '../../../../packages/package.core.global/app/actions'
import BaseLayoutContainer from '../../../../packages/package.core.ui/app/layouts/BaseLayout/container'
import DocumentContainer from '../../../../packages/package.core.ui/app/documents/Document/container'

class Login extends React.Component {
    static getInitialProps(ctx) {

        /**
         * Server side ACTION: SET_CURRENT_ROUTE
         */
        ctx.store.dispatch(FSA(SET_CURRENT_ROUTE, false, {url: ctx.asPath}))
        return {
            currentRoute: ctx.reduxStore.getState().global.router.currentRoute,
            isServer: !!ctx.req
        }
    }

    render() {
        return (
            <DocumentContainer>
                <BaseLayoutContainer JSXcontextPanelContent={<div />} currentRoute={this.props.currentRoute} className="Login" JSXdetailPanelContent={<div />} />
            </DocumentContainer>
        )
    }
}

export default connect()(Login)
