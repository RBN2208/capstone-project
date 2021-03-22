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
    expect(screen.getByTestId('searchbar')).toBeInTheDocument()
  })
  it('accepts written input', () => {
    const searchInput = jest.fn()
    render(<Searchbar onTypeSearch={searchInput} />)
    expect(screen.getByRole('textbox')).toHaveValue('')
    userEvent.type(screen.getByRole('textbox'), 'it works!')
    expect(screen.getByRole('textbox')).toHaveValue('it works!')
  })
})
