import React from 'react'

import ServiceCard from '../components/ServiceCard/ServiceCard'

export default {
  title: 'Servicecard',
  component: ServiceCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <ServiceCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  name: 'Motorhaube folieren',
  costs: 50,
}
