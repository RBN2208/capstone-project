import React from 'react'
import { actions } from '@storybook/addon-actions'

import ConfirmDialog from '../../components/FormComponents/ConfirmDialog'

export default {
  title: 'Misc/ConfirmDialog',
  component: ConfirmDialog,
  argTypes: { onClick: { action: 'submitted' } },
}

const events = actions({
  toggle: 'toggles the open function',
  deleteEntry: 'delete the entry over the id',
})

const Template = args => <ConfirmDialog {...events} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  top: '20px',
  right: '50px',
}
