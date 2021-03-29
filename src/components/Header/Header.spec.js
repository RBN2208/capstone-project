import { render, screen } from '@testing-library/react'
import Header from './Header'
import '@testing-library/jest-dom'

describe('Header', () => {
  it('renders the property title', () => {
    render(<Header title="calcuFix" />)
    expect(screen.getByText('calcuFix')).toBeInTheDocument()
  })
})
