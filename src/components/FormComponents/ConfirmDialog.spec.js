import { render, screen } from '@testing-library/react'
import ConfirmDialog from './ConfirmDialog'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('ConfirmDialog', () => {
  it('renders a Dialog with a text and two buttons', () => {
    const deleteFunc = jest.fn()
    const toggleFunc = jest.fn()
    const { rerender } = render(
      <ConfirmDialog onDeleteEntry={deleteFunc} toggle={toggleFunc} />
    )
    expect(screen.getByText('Eintrag löschen?')).toBeInTheDocument()
    expect(screen.getAllByRole('button')).toHaveLength(2)
    expect(screen.getByRole('button', { name: /ja/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /nein/i })).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', { name: /ja/i }))
    expect(deleteFunc).toHaveBeenCalledTimes(1)
    expect(toggleFunc).toHaveBeenCalledTimes(0)
    rerender(<ConfirmDialog onDeleteEntry={deleteFunc} toggle={toggleFunc} />)
    userEvent.click(screen.getByRole('button', { name: /nein/i }))
    expect(deleteFunc).toHaveBeenCalledTimes(1)
    expect(toggleFunc).toHaveBeenCalledTimes(1)
  })
})
