import { render, screen } from '@testing-library/react'
import CalculationPage from './CalculationPage'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

const services = [
  { id: 1, name: 'one', costs: 50 },
  { id: 2, name: 'two', costs: 150 },
  { id: 3, name: 'three', costs: 250 },
]

const onOpenNewServiceForm = jest.fn()

describe('CalculationPage', () => {
  it('renders a servicecard with text', () => {
    render(<CalculationPage name={services[0].name} services={services} />)
    expect(screen.getByText('one')).toBeInTheDocument()
  })
  it('has a menubutton for a slide menu', () => {
    render(<CalculationPage services={services} />)
    expect(screen.getByLabelText('menu')).toBeInTheDocument()
  })
  it('renders a header', () => {
    render(<CalculationPage services={services} />)
    expect(screen.getByText('QuickQalc')).toBeInTheDocument()
  })
  it('renders the finalCosts without add', () => {
    render(<CalculationPage services={services} />)
    expect(screen.getByText('Endpreis: €')).toBeInTheDocument()
  })
})
