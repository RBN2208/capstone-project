import React from 'react'
import { actions } from '@storybook/addon-actions'

import MenuButton from '../components/MenuButton/MenuButton'

export default {
  title: 'MenuButton',
  component: MenuButton,
}

const events = actions({
  openSlideMenu: 'open Menu',
})

const Template = args => <MenuButton {...events} {...args} />

export const Primary = Template.bind({})
Primary.args = {}
