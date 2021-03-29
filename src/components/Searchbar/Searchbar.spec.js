import { render, screen } from '@testing-library/react'
import Searchbar from './Searchbar'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('Searchbar', () => {
  it('an input', () => {
    render(<Searchbar />)
    expect(
      screen.getByPlaceholderText('Dienstleistungen...')
    ).toBeInTheDocument()
    expect(screen.getByLabelText('searchbar')).toBeInTheDocument()
  })
  it('accepts written input', () => {
    const searchInput = jest.fn()
    render(<Searchbar onTypeSearch={searchInput} />)
    const input = screen.getByLabelText('searchbar')
    expect(input).toHaveValue('')
    userEvent.type(input, 'it works!')
    expect(input).toHaveValue('it works!')
  })
})
