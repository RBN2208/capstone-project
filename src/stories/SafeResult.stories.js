import React from 'react'
import { actions } from '@storybook/addon-actions'

import SafeResult from '../components/FormComponents/SafeResult'

export default {
  title: 'SafeResult',
  component: SafeResult,
}

const events = actions({
  setOpenSafeResult: 'Close Menu',
  onSafeCosts: 'Handle cost safe',
})

const Template = args => <SafeResult {...events} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  finalCosts: 200,
}
