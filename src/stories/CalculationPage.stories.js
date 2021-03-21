import React from 'react'
import { actions } from '@storybook/addon-actions'

import CalculationPage from '../components/CalcPage/CalculationPage'

export default {
  title: 'CalculationPage',
  component: CalculationPage,
  argTypes: { onClick: { action: 'submitted' } },
}

const services = [
  { id: 1, name: 'test1', costs: 50 },
  { id: 2, name: 'test2', costs: 150 },
  { id: 3, name: 'test3', costs: 250 },
]

const events = actions({
  setServices: 'add new service',
  onPlus: 'plus',
  onMinus: 'minus',
  onAddingNewCosts: 'set new costs',
  onSafeResult: 'Safe resultvalue',
  onOpenNewServiceForm: 'open new Serivce',
  toggleSlideMenu: 'toggle open/close',
})

const Template = args => <CalculationPage {...events} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  services: services,
  finalCosts: 200,
}
