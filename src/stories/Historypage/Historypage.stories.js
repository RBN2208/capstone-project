import React from 'react'
import { actions } from '@storybook/addon-actions'
import styled from 'styled-components'

import HistoryPage from '../../components/HistoryPage/HistoryPage'

export default {
  title: 'HistoryPage/HistoryPage',
  component: HistoryPage,
  argTypes: { onClick: { action: 'submitted' } },
}

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
const lastCalculations = [
  {
    id: 1,
    keynote: 'Herr Müller',
    costs: 50,
    urls: urls,
    usedServices: usedServices,
  },
  {
    id: 2,
    keynote: 'Herr Meier',
    costs: 150,
    urls: urls,
    usedServices: usedServices,
  },
  {
    id: 3,
    keynote: 'Herr Peters',
    costs: 250,
    urls: urls,
    usedServices: usedServices,
  },
]

const events = actions({
  toggleSlideMenu: 'toggle open/close',
  closeSlideMenu: 'closed slide menu',
  toggleImages: 'toggles the image details',
  toggleDetails: 'toggles the image details',
})

const Template = args => (
  <SampleGrid>
    <HistoryPage {...events} {...args} />
  </SampleGrid>
)

export const Primary = Template.bind({})
Primary.args = {
  lastCalculations: lastCalculations,
  urls: urls,
  usedServices: usedServices,
}

const SampleGrid = styled.div`
  display: grid;
  grid-template-rows: 50px auto 50px;
`
