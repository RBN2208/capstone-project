import React from 'react'
import { actions } from '@storybook/addon-actions'
import styled from 'styled-components'

import CalculationPage from '../../components/CalcPage/CalculationPage'

export default {
  title: 'Mainpage/CalculationPage',
  component: CalculationPage,
}

const services = [
  { id: 1, name: 'test1', costs: 50 },
  { id: 2, name: 'test2', costs: 150 },
  { id: 3, name: 'test3', costs: 250 },
]

const events = actions({
  setServices: 'add new service',
  onPlus: 'plus',
  onMinus: 'minus',
  onAddingNewCosts: 'set new costs',
  onSafeResult: 'Safe result value',
  onOpenNewServiceForm: 'open new Serivce',
  toggleSlideMenu: 'toggle open/close',
  closeSlideMenu: 'closed slide menu',
})

const Template = args => (
  <SampleGrid>
    <CalculationPage {...events} {...args} />
  </SampleGrid>
)

export const Primary = Template.bind({})
Primary.args = {
  services: services,
  finalCosts: 200,
}

const SampleGrid = styled.div`
  display: grid;
  grid-template-rows: 50px auto 50px;
`
