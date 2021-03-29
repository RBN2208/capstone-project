import React from 'react'
import { actions } from '@storybook/addon-actions'

import HistoryEntry from '../../components/HistoryPage/HistoryEntry'

export default {
  title: 'HistoryPage/HistoryEntry',
  component: HistoryEntry,
  argTypes: { onClick: { action: 'submitted' } },
}

const urlList = [
  { url: 'https://source.unsplash.com/random/100x200' },
  { url: 'https://source.unsplash.com/random/100x200' },
  { url: 'https://source.unsplash.com/random/100x200' },
]

const usedData = [
  { id: 1, name: 'Bohren', hours: 3, costs: 44 },
  { id: 2, name: 'Kleben', hours: 1, costs: 54 },
  { id: 3, name: 'Sägen', hours: 2, costs: 14 },
]

const events = actions({
  toggleConfirm: 'opens confirm dialog',
  toggleImages: 'opens images box',
  toggleDetails: 'opens details list',
  onDeleteHistoryEntry: 'deletes the entry',
})

const Template = args => <HistoryEntry {...events} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  keynote: 'Herr Müller',
  costs: 1584 + '€',
  urls: urlList,
  usedServices: usedData,
}
