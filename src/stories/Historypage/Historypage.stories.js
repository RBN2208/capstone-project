import React from 'react'
import { actions } from '@storybook/addon-actions'

import HistoryPage from '../../components/HistoryPage/HistoryPage'

export default {
  title: 'HistoryPage/HistoryPage',
  component: HistoryPage,
  argTypes: { onClick: { action: 'submitted' } },
}

const lastCalculations = [
  { id: 1, keynote: 'Herr Müller', costs: 50 },
  { id: 2, keynote: 'Herr Meier', costs: 150 },
  { id: 3, keynote: 'Herr Peters', costs: 250 },
]
const urls = [
  { url: 'https://source.unsplash.com/random/200x500' },
  { url: 'https://source.unsplash.com/random/200x500' },
  { url: 'https://source.unsplash.com/random/200x500' },
]
const usedServices = [
  { id: 1, name: 'Bohren', hours: 1, costs: 50 },
  { id: 2, name: 'Sägen', hours: 2, costs: 100 },
  { id: 3, name: 'Kleben', hours: 3, costs: 150 },
]
const events = actions({
  toggleSlideMenu: 'toggle open/close',
  closeSlideMenu: 'closed slide menu',
})

const Template = args => <HistoryPage {...events} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  lastCalculations,
  urls,
  usedServices,
}
