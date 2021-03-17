import { render, screen } from '@testing-library/react'
import SlideMenu from './SlideMenu'
import { MemoryRouter } from 'react-router'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('ServiceCard', () => {
  it('renders a slide menu with two links', () => {
    render(
      <MemoryRouter>
        <SlideMenu />
      </MemoryRouter>
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('History')).toBeInTheDocument()
  })
  it('links to different pages', () => {
    render(
      <MemoryRouter>
        <SlideMenu />
      </MemoryRouter>
    )
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/')
    expect(screen.getByText('History').closest('a')).toHaveAttribute(
      'href',
      '/history'
    )
  })
})

/*
it('contains two buttons', () => {
    render(
      <SlideMenu name={services[1].name} costs={500} services={services} />
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
      <SlideMenu
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
*/
