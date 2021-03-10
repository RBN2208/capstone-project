import React from 'react'
import { action } from '@storybook/addon-actions'

import ServiceCard from '../components/ServiceCard/ServiceCard'

export default {
  title: 'Servicecard',
  component: ServiceCard,
  argTypes: { onClick: { action: 'clicked' } },
}
const Template = args => <ServiceCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  name: 'Motorhaube folieren',
  costs: 50,
  onPlus: action('plus'),
  onMinus: action('minus'),
}
