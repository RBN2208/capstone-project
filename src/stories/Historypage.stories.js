import React from 'react'
import { actions } from '@storybook/addon-actions'

import History from '../components/HistoryPage/History'

export default {
  title: 'History',
  component: History,
  argTypes: { onClick: { action: 'submitted' } },
}

const lastCalculations = [
  { id: 1, date: '01.01.2021', costs: 50 },
  { id: 2, date: '02.01.2021', costs: 150 },
  { id: 3, date: '03.01.2021', costs: 250 },
]

const events = actions({
  toggleSlideMenu: 'toggle open/close',
})

const Template = args => <History {...events} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  lastCalculations: lastCalculations,
}
