import React from 'react'
import { actions } from '@storybook/addon-actions'

import Searchbar from '../../components/Searchbar/Searchbar'

export default {
  title: 'Mainpage/Searchbar',
  component: Searchbar,
}

const events = actions({
  onTypeSearch: 'filter typed value',
})

const Template = args => <Searchbar {...events} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  resultValue: 20,
}
