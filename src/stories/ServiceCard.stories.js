import React from 'react'

import ServiceCard from '../components/ServiceCard/ServiceCard'

export default {
  title: 'Servicecard',
  component: ServiceCard,
}

const Template = args => <ServiceCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  name: 'Motorhaube folieren',
  costs: 50,
}
