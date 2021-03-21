import { render, screen } from '@testing-library/react'
import MenuButton from './MenuButton'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('Button', () => {
  it('renders a button with a prop as backgroundcolor', () => {
    render(<MenuButton />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  it('toggle the slide menu', () => {
    const toggle = jest.fn()
    render(<MenuButton toggleSlideMenu={toggle} />)
    userEvent.click(screen.getByRole('button'))
    expect(toggle).toHaveBeenCalledTimes(1)
  })
})
