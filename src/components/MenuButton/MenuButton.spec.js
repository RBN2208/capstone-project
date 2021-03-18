import { render, screen } from '@testing-library/react'
import MenuButton from './MenuButton'
import '@testing-library/jest-dom'

describe('Button', () => {
  it('renders a button with a prop as backgroundcolor', () => {
    render(<MenuButton />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
