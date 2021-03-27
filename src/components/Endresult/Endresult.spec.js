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
    render(<Endresult finalCosts={500} onSafeResult={open} />)
    userEvent.click(screen.getByTestId('saveResultButton'))
    expect(open).toHaveBeenCalledTimes(1)
  })
})
