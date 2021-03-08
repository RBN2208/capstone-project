import { render, screen, fireEvent } from '@testing-library/react'
import ServiceCard from './ServiceCard'
import '@testing-library/jest-dom'

describe('ServiceCard', () => {
  it('renders a card with text', () => {
    render(<ServiceCard name="Servicecard" />)
    expect(screen.getByText('Servicecard')).toBeInTheDocument()
  })
  it('toggles the visibility of the costs when clicked', () => {
    render(<ServiceCard name="Servicecard" costs={500} />)
    fireEvent.click(screen.getByText('Servicecard'))
    expect(screen.getByText(500 + '€')).toBeVisible()
  })
})