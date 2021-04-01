import React from 'react'
import { actions } from '@storybook/addon-actions'

import SaveResultForm from '../../components/FormComponents/SaveResultForm'

export default {
  title: 'FormComponents/SaveResultForm',
  component: SaveResultForm,
}

const urlData = [
  { url: 'https://source.unsplash.com/random/200x500' },
  { url: 'https://source.unsplash.com/random/200x500' },
]

const events = actions({
  onSave: 'Handle data submit on save',
  onDiscardSave: 'closes this form without action',
  upload: 'opens images',
})

const Template = args => <SaveResultForm {...events} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  keynote: 'Herr Müller',
  finalCosts: 43,
  urlData: urlData,
}
