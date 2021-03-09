import { render, screen } from '@testing-library/react'
import ServiceCard from './ServiceCard'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('ServiceCard', () => {
  it('renders a card with text', () => {
    render(<ServiceCard name="Servicecard" />)
    expect(screen.getByText('Servicecard')).toBeInTheDocument()
  })
  it('toggles the visibility of the costs when clicked', () => {
    render(<ServiceCard name="Servicecard" costs={500} />)
    userEvent.click(screen.getByText('Servicecard'))
    expect(screen.getByText(500 + '€')).toBeVisible()
  })
})
