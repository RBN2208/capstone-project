import React from 'react'
import { actions } from '@storybook/addon-actions'

import MenuButton from '../../components/MenuButton/MenuButton'

export default {
  title: 'Misc/MenuButton',
  component: MenuButton,
}

const events = actions({
  toggleSlideMenu: 'toggle open/close',
})

const Template = args => <MenuButton {...events} {...args} />

export const Primary = Template.bind({})
Primary.args = {}
