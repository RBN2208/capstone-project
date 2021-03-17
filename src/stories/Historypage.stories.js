import React from 'react'
import { actions } from '@storybook/addon-actions'

import History from '../components/HistoryPage/History'

export default {
  title: 'History',
  component: History,
  argTypes: { onClick: { action: 'submitted' } },
}

const lastCalculations = [
  { id: 1, date: 'gestern', costs: 50 },
  { id: 2, date: 'heute', costs: 150 },
  { id: 3, date: 'morgen', costs: 250 },
]

const events = actions({
  setIsSlideMenuOpen: 'open slide menu',
})

const Template = args => <History {...events} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  lastCalculations: lastCalculations,
}
