import React from 'react'
import { actions } from '@storybook/addon-actions'
import styled from 'styled-components'

import ServicecardInfo from '../components/FormComponents/ServicecardInfo'

export default {
  title: 'ServicecardInfo',
  component: ServicecardInfo,
  argTypes: { onClick: { action: 'submitted' } },
}

const events = actions({
  setUsedCosts: 'set Costs',
  onAddingNewCosts: 'on Add',
})

const Template = args => (
  <SampleWrapper>
    <ServicecardInfo {...events} {...args} />
  </SampleWrapper>
)

export const Primary = Template.bind({})
Primary.args = {
  hours: 5,
  currentCostsPerHour: 200,
  notes: 'This is just a sample note',
}

const SampleWrapper = styled.div`
  width: 400px;
  background-color: lightgray;
  padding: 10px;
`
