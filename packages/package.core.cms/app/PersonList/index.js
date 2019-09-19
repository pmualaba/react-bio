import React from 'react'
import GridTable from '../../../package.core.ui/app/blocks/tables/GridTable'

class PersonList extends React.Component {
    l = (this.props.user && this.props.user.locale) || 'nl_NL'

    componentWillMount() {
        console.log('PersonList componentWillMount()', this.props)
    }

    componentDidMount() {
        console.log('PersonList componentDidMount()')
    }

    render() {
        console.log('PersonList render()')
        return (
            <div className="PersonList main-panel-content">
                <GridTable data={this.props.data} block={this.props.block} config={this.props.config} />
            </div>
        )
    }
}

export default PersonList
