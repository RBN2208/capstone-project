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
    expect(screen.getByText('Preis: ' + 500 + '€')).toBeVisible()
  })
  it('contains two buttons', () => {
    render(<ServiceCard name="Servicecard" costs={500} />)
    expect(
      screen.getByRole('button', { name: 'button-plus' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'button-minus' })
    ).toBeInTheDocument()
  })
  it('adds a value on plus and removes on minus', () => {
    const callBackPlus = jest.fn()
    const callBackMinus = jest.fn()

    render(
      <ServiceCard
        name="Servicecard"
        costs={500}
        onPlus={callBackPlus}
        onMinus={callBackMinus}
      />
    )
    userEvent.click(screen.getByRole('button', { name: 'button-plus' }))
    expect(callBackPlus).toHaveBeenCalledTimes(1)
    userEvent.click(screen.getByRole('button', { name: 'button-minus' }))
    expect(callBackMinus).toHaveBeenCalledTimes(1)
  })
})
