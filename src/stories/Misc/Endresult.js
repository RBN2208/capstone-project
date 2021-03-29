import React from 'react'
import { actions } from '@storybook/addon-actions'

import Endresult from '../../components/Endresult/Endresult'

export default {
  title: 'Misc/Endresult',
  component: Endresult,
}

const events = actions({
  onSafeResult: 'opens the "SafeResultForm',
})

const Template = args => <Endresult {...events} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  resultValue: 20,
}
