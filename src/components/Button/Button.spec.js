import { render, screen } from '@testing-library/react'
import Button from './Button'
import '@testing-library/jest-dom'

describe('Button', () => {
  it('renders a button with a prop as backgroundcolor', () => {
    render(<Button bgColor={{ name: 'green' }} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveStyle('background-color: green')
  })
})
