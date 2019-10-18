import React, {Component} from 'react'
import API from '../../../packages/package.core.fn/api'

class Page extends Component {
    async componentDidMount() {
        // setTimeout(async function() {

        const result = await API(
            'GET_TEST',
            false,
            {},
            {package: 'package.core.cms', endpoint: '/api/cms/app'}
        )
        console.log('Page componentDidMount result', result)

        // }, 1000)
    }

    render() {
        return (
            <div>
                <h1>PAGE</h1>
            </div>
        )
    }
}

export default Page
