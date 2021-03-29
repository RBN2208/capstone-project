import React from 'react'

import HistoryImages from '../../components/HistoryPage/HistoryImages'

export default {
  title: 'HistoryPage/HistoryImages',
  component: HistoryImages,
  argTypes: { onClick: { action: 'submitted' } },
}

const urlList = [
  { url: 'https://source.unsplash.com/random/200x500' },
  { url: 'https://source.unsplash.com/random/200x500' },
  { url: 'https://source.unsplash.com/random/200x500' },
]

const Template = args => <HistoryImages {...args} />

export const Primary = Template.bind({})
Primary.args = {
  urls: urlList,
}
