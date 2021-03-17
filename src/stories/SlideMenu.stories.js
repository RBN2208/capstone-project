import React from 'react'
import { actions } from '@storybook/addon-actions'

import SlideMenu from '../components/SlideMenu/SlideMenu'
import { MemoryRouter } from 'react-router'

export default {
  title: 'SlideMenu',
  component: SlideMenu,
}

const events = actions({
  setIsSlideMenuOpen: false,
  isSlideMenuOpen: false,
})

const Template = args => (
  <MemoryRouter>
    <SlideMenu {...events} {...args} />
  </MemoryRouter>
)

export const Primary = Template.bind({})
Primary.args = {
  finalCosts: 200,
}
