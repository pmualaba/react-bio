import React from 'react'

import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import {text, boolean, number} from '@storybook/addon-knobs'

import ButtonAnimated from '../../../../../packages/bio.package.core.ui/app/elements/ButtonAnimated'

storiesOf('bio-package-core-ui/app/elements/buttons/ButtonAnimated', module).add('default', () => (
    <ButtonAnimated story={text('default', 'TEST3')} label={number('props.own.label', 5)}>
        {text('props.own.children', 'children')} {text('props.own.children2', 'children')}
    </ButtonAnimated>
))
