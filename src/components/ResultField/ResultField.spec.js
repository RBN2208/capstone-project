import { render, screen } from '@testing-library/react'
import ResultField from './ResultField'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('ResultField', () => {
  it('renders the sum of values', () => {
    render(<ResultField finalCosts={500} />)
    expect(screen.getByText('Endpreis: ' + 500 + ' €')).toBeInTheDocument()
  })
  it('opens the save result form', () => {
    const open = jest.fn()
    render(<ResultField finalCosts={500} onSafeResult={open} />)
    userEvent.click(screen.getByTestId('saveResultButton'))
    expect(open).toHaveBeenCalledTimes(1)
  })
})
