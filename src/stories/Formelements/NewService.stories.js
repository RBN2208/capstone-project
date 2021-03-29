import React from 'react'
import { actions } from '@storybook/addon-actions'

import NewService from '../../components/FormComponents/NewService'

export default {
  title: 'FormComponents/NewService',
  component: NewService,
  argTypes: { onClick: { action: 'submitted' } },
}

const events = actions({
  onAddNewService: '"home" = close, data is used for new card',
  onAbort: 'only close form',
})

const Template = args => <NewService {...events} />

export const Primary = Template.bind({})
