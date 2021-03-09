import React from 'react'

import Button from '../components/Button/Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Primary = () => <Button bgColor={{ name: 'crimson' }}>-</Button>
export const Secondary = () => (
  <Button bgColor={{ name: 'lightgreen' }}>+</Button>
)
