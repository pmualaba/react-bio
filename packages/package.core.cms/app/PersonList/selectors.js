import {createSelector} from 'reselect'

const authorize = (config, permissions) => {
    return config
}

export const blockPersonListSelector = createSelector(
    state => state.ui['package.core.identity'].app.PersonList.ui.composition.layout.regions.main.blocks['GridTable.PersonList'].block,
    gridTableBlock => {
        return authorize(gridTableBlock, null)
    }
)

export const dataPersonListSelector = createSelector(
    state => state.db.collections['package.core.identity'].Identity.all,
    persons => {
        return persons
    }
)

export const configPersonListSelector = createSelector(
    state => state.ui['package.core.identity'].app.PersonList.ui.composition.layout.regions.main.blocks['GridTable.PersonList'].config,
    gridTableConfig => {
        return authorize(gridTableConfig, null)
    }
)
