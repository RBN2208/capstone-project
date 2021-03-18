import React from 'react'
import { actions } from '@storybook/addon-actions'

import SlideMenu from '../components/SlideMenu/SlideMenu'
import { MemoryRouter } from 'react-router'

export default {
  title: 'SlideMenu',
  component: SlideMenu,
}

const events = actions({
  setIsSlideMenuOpen: 'true or false',
  isSlideMenuOpen: 'open and close',
})

const Template = args => <SlideMenu {...events} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  finalCosts: 200,
}
