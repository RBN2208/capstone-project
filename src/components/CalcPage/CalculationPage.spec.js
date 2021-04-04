import { getByTestId, render, screen } from '@testing-library/react'
import CalculationPage from './CalculationPage'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Calculation from './CalculationPage'

const services = [
  { id: '1', name: 'one', costs: 50 },
  { id: '2', name: 'two', costs: 150 },
  { id: '3', name: 'three', costs: 250 },
]

describe('CalculationPage', () => {
  it('renders a servicecard with text', () => {
    render(<CalculationPage name={services.name} services={services} />)
    expect(screen.getByText('one')).toBeInTheDocument()
    expect(screen.getByText('two')).toBeInTheDocument()
    expect(screen.getByText('three')).toBeInTheDocument()
  })
  it('has a menubutton for a slide menu', () => {
    render(<CalculationPage services={services} />)
    expect(screen.getByLabelText('menu')).toBeInTheDocument()
  })
  it('renders a header', () => {
    render(<CalculationPage services={services} />)
    expect(screen.getByText('calcuFix')).toBeInTheDocument()
  })
  it('renders the finalCosts coming from state', () => {
    const { rerender } = render(
      <CalculationPage services={services} finalCosts={0} />
    )
    expect(screen.getByText('Endpreis: 0 €')).toBeInTheDocument()
    rerender(<CalculationPage services={services} finalCosts={333} />)
    expect(screen.getByText('Endpreis: 333 €')).toBeInTheDocument()
  })
})
