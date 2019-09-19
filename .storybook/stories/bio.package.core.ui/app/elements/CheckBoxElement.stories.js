import React from 'react'

import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import {text, boolean, number, object} from '@storybook/addon-knobs'
import {State, Store} from '@sambego/storybook-state'

import CheckBoxElement from '../../../../../packages/bio.package.core.ui/app/elements/CheckBoxElementBackup'

const store = new Store({
    value: {
        name: 'option',
        checked: true
    }
})

storiesOf('bio-package-core-ui/app/elements/CheckBoxElement', module).add('default', () => (
    <State store={store}>
        <CheckBoxElement
            value={object('value', {
                name: 'option',
                checked: true
            })}
            label={text('label', 'Label Option2')}
            onValueUpdate={value => {
                console.log('value', value)
                store.set({value})
            }}
        />
    </State>
))
