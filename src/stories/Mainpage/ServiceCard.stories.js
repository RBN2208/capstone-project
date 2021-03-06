import React from 'react'
import { action } from '@storybook/addon-actions'

import ServiceCard from '../../components/ServiceCard/ServiceCard'

export default {
  title: 'Mainpage/Servicecard',
  component: ServiceCard,
}

const services = [
  { id: 1, name: 'test1', costs: 50 },
  { id: 2, name: 'test2', costs: 150 },
  { id: 3, name: 'test3', costs: 250 },
]

const Template = args => <ServiceCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  name: 'Motorhaube folieren',
  costs: 50,
  onPlus: action('plus'),
  onMinus: action('minus'),
  onAddingNewCosts: action('Set new Costs'),
  services: services,
}
