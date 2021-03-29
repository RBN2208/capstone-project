import React from 'react'
import { actions } from '@storybook/addon-actions'

import SlideMenu from '../../components/SlideMenu/SlideMenu'

export default {
  title: 'Misc/SlideMenu',
  component: SlideMenu,
}

const events = actions({
  slideMenuState: 'close/open',
  toggleSlideMenu: 'open and close',
})

const Template = args => <SlideMenu {...events} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  finalCosts: 200,
  toggleSlideMenu: true,
}
