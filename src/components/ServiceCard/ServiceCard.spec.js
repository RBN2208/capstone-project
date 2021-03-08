import { render, screen, fireEvent } from '@testing-library/react'
import ServiceCard from './ServiceCard'
import '@testing-library/jest-dom'

describe('ServiceCard', () => {
  it('renders a card with text', () => {
    render(<ServiceCard name="Servicecard" />)
    expect(screen.getByText('Servicecard')).toBeInTheDocument()
  })
  it('Should toggle the visibility of the costs', () => {
    render(<ServiceCard name="Servicecard" costs={500} />)

    fireEvent.click(screen.getByRole('button', { name: 'Servicecard' }))
    expect(screen.getByText(500 + '€')).toBeVisible()
  })
})
