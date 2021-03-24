import { render, screen } from '@testing-library/react'
import ConfirmDialog from './ConfirmDialog'
import '@testing-library/jest-dom'

describe('ConfirmDialog', () => {
  it('renders a Dialog with a text and two buttons', () => {
    render(<ConfirmDialog />)
    expect(screen.getByText('Eintrag löschen?')).toBeInTheDocument()
    expect(screen.getAllByRole('button')).toHaveLength(2)
    expect(screen.getByRole('button', { name: /ja/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /nein/i })).toBeInTheDocument()
  })
})
