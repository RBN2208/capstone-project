import { render, screen } from '@testing-library/react'
import History from './History'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

const savedCosts = [
  { id: 1, date: '01.01.2021', costs: 50 },
  { id: 2, date: '02.02.2021', costs: 150 },
  { id: 3, date: '03.03.2021', costs: 250 },
]

describe('History', () => {
  it('renders a history entry with given values', () => {
    render(<History lastCalculations={savedCosts} />)
    expect(screen.getByText('Kalkulation vom 01.01.2021 :')).toBeInTheDocument()
    expect(screen.getByText('Kalkulation vom 02.02.2021 :')).toBeInTheDocument()
    expect(screen.getByText('Kalkulation vom 03.03.2021 :')).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('150')).toBeInTheDocument()
    expect(screen.getByText('250')).toBeInTheDocument()
  })
})
