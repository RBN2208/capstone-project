import { render, screen } from '@testing-library/react'
import SlideMenu from './SlideMenu'
import { MemoryRouter } from 'react-router'
import '@testing-library/jest-dom'

describe('ServiceCard', () => {
  it('renders a slide menu with two links', () => {
    render(
      <MemoryRouter>
        <SlideMenu />
      </MemoryRouter>
    )
    expect(screen.getByText('Kalkulation')).toBeInTheDocument()
    expect(screen.getByText('Historie')).toBeInTheDocument()
  })
  it('links to different pages', () => {
    render(
      <MemoryRouter>
        <SlideMenu />
      </MemoryRouter>
    )
    expect(screen.getByText('Kalkulation').closest('a')).toHaveAttribute(
      'href',
      '/'
    )
    expect(screen.getByText('Historie').closest('a')).toHaveAttribute(
      'href',
      '/history'
    )
  })
})
