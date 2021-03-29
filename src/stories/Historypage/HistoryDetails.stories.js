import React from 'react'
import { actions } from '@storybook/addon-actions'

import HistoryDetails from '../../components/HistoryPage/HistoryDetails'

export default {
  title: 'HistoryPage/HistoryDetails',
  component: HistoryDetails,
  argTypes: { onClick: { action: 'submitted' } },
}

const usedServices = [
  { id: 1, name: 'Bohren', hours: 1, costs: 50 },
  { id: 2, name: 'Sägen', hours: 2, costs: 100 },
  { id: 3, name: 'Kleben', hours: 3, costs: 150 },
]

const events = actions({
  toggleSlideMenu: 'toggle open/close',
})

const Template = args => <HistoryDetails {...events} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  usedServices: usedServices,
}
