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
