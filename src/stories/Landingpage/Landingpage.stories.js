import React from 'react'
import styled from 'styled-components'

import Landingpage from '../../components/Landingpage/Landingpage'

export default {
  title: 'Landingpage/Landingpage',
  component: Landingpage,
}

const Template = args => (
  <SampleGrid>
    <Landingpage {...args} />
  </SampleGrid>
)

export const Primary = Template.bind({})
Primary.args = {
  loadingPage: false,
}

const SampleGrid = styled.div`
  display: grid;
  grid-template-rows: 50px auto 50px;
`
