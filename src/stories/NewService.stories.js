import React from 'react'
import { actions } from '@storybook/addon-actions'

import NewService from '../components/FormComponents/NewService'

export default {
  title: 'NewService',
  component: NewService,
  argTypes: { onClick: { action: 'submitted' } },
}

const events = actions({
  onAddNewService: '"home" = close, data is used for new card',
  onSubmit: 'Name und Costs aus Submit',
  onOpenNewServiceForm: 'only close form',
})

const Template = args => <NewService {...events} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  counter: 5,
  currentCosts: 200,
}
