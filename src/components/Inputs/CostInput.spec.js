import { render, screen } from '@testing-library/react'
import CostInput from './CostInput'
import '@testing-library/jest-dom'

describe('CostInput', () => {
  it('shows the current costs per hour, also when changed', () => {
    const { rerender } = render(<CostInput displayedCosts={40} />)
    expect(screen.getByPlaceholderText('40€')).toBeInTheDocument()
    rerender(<CostInput displayedCosts={55} />)
    expect(screen.getByPlaceholderText('55€')).toBeInTheDocument()
  })
})
