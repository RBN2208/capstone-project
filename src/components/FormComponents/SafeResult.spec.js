import { getByTestId, render, screen } from '@testing-library/react'
import SafeResult from './SafeResult'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('SafeResult', () => {
  it('renders a form that displays the final costs', () => {
    render(<SafeResult finalCosts={200} />)
    expect(screen.getByText(200 + '€')).toBeInTheDocument()
  })
  it('has a button to safe the final costs', () => {
    const handleClickOnSafe = jest.fn()
    const onSafeCosts = jest.fn()
    const setOpenSafeResult = jest.fn()
    render(
      <SafeResult
        onSubmit={handleClickOnSafe}
        onSafeCosts={onSafeCosts}
        setOpenSafeResult={setOpenSafeResult}
      />
    )
    userEvent.click(screen.getByTestId('safebutton'))
    expect(onSafeCosts).toHaveBeenCalledTimes(1)
  })
  it('has a button to get back', () => {
    const handleClickOnSafe = jest.fn()
    const onSafeCosts = jest.fn()
    const setOpenSafeResult = jest.fn()
    render(
      <SafeResult
        onSubmit={handleClickOnSafe}
        onSafeCosts={onSafeCosts}
        setOpenSafeResult={setOpenSafeResult}
      />
    )
    userEvent.click(screen.getByTestId('backbutton'))
    expect(setOpenSafeResult).toHaveBeenCalledTimes(1)
  })
})
