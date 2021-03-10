import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from '../components/Button/Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Primary = () => (
  <Button onClick={action('Minus')} bgColor={{ name: 'crimson' }}>
    -
  </Button>
)
export const Secondary = () => (
  <Button onClick={action('Plus')} bgColor={{ name: 'lightgreen' }}>
    +
  </Button>
)
