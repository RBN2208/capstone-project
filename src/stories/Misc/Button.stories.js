import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from '../../components/Button/Button'

export default {
  title: 'Misc/Button',
  component: Button,
}

export const Primary = () => <Button onClick={action('Minus')}>-</Button>
export const Secondary = () => <Button onClick={action('Plus')}>Hello</Button>
