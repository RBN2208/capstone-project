import { render, screen } from '@testing-library/react'
import Endresult from './Endresult'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('Endresult', () => {
  it('renders the sum of values', () => {
    render(<Endresult finalCosts={500} />)
    expect(screen.getByText('Endpreis: ' + 500 + ' €')).toBeInTheDocument()
  })
  it('opens the save result form', () => {
    const open = jest.fn()
    render(<Endresult finalCosts={500} onSaveResult={open} />)
    userEvent.click(screen.getByLabelText('save result'))
    expect(open).toHaveBeenCalledTimes(1)
  })
})
