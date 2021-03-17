import React from 'react'
import { actions } from '@storybook/addon-actions'

import Result from '../components/Result/Result'

export default {
  title: 'Result',
  component: Result,
}

const events = actions({
  setOpenSafeResult: 'open',
})

const Template = args => <Result {...events} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  resultValue: 20,
}
