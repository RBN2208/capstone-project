import React from 'react'
import { actions } from '@storybook/addon-actions'

import ResultField from '../components/ResultField/ResultField'

export default {
  title: 'Result',
  component: ResultField,
}

const events = actions({
  onSafeResult: 'opens the "SafeResultForm',
})

const Template = args => <ResultField {...events} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  resultValue: 20,
}
