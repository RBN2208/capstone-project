import React from 'react'
import { actions } from '@storybook/addon-actions'

import ServicecardInfo from '../components/FormComponents/ServicecardInfo'

export default {
  title: 'ServicecardInfo',
  component: ServicecardInfo,
  argTypes: { onClick: { action: 'submitted' } },
}

const events = actions({
  setUsedCosts: 'set Costs',
  onAddingNewCosts: 'on Add',
})

const Template = args => <ServicecardInfo {...events} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  counter: 5,
  currentCosts: 200,
}
