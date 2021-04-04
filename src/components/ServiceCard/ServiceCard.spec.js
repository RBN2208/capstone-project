import { render, screen } from '@testing-library/react'
import ServiceCard from './ServiceCard'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

const services = [
  { id: 1, name: 'one', costs: 50, notes: 'Hey note 1!' },
  { id: 2, name: 'two', costs: 150, notes: 'Hey note 2!' },
  { id: 3, name: 'three', costs: 250, notes: 'Hey note 3!' },
]

describe('ServiceCard', () => {
  it('renders a card with text', () => {
    render(<ServiceCard name={services[0].name} services={services} />)
    expect(screen.getByText('one')).toBeInTheDocument()
  })
  it('renders the text for notes when the card is clicked', () => {
    render(
      <ServiceCard
        name={services[0].name}
        notes={services[0].notes}
        services={services}
      />
    )
    userEvent.click(screen.getByTestId('cardcontainer'))
    expect(screen.getByText('Hey note 1!')).toBeInTheDocument()
  })
  it('contains two buttons', () => {
    render(
      <ServiceCard name={services[1].name} costs={500} services={services} />
    )
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
        services={services}
      />
    )
    userEvent.click(screen.getByRole('button', { name: 'button-plus' }))
    expect(callBackPlus).toHaveBeenCalledTimes(1)
    userEvent.click(screen.getByRole('button', { name: 'button-minus' }))
    expect(callBackMinus).toHaveBeenCalledTimes(1)
  })
})
