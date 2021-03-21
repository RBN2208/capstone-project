import { render, screen } from '@testing-library/react'
import SafeResultForm from './SafeResultForm'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('SafeResult', () => {
  it('renders a form that displays the final costs', () => {
    render(<SafeResultForm finalCosts={200} />)
    expect(screen.getByText(200 + '€')).toBeInTheDocument()
  })
  it('has a button to safe the final costs', () => {
    const handleClickOnSafe = jest.fn()
    const onSafeCosts = jest.fn()
    const setOpenSafeResult = jest.fn()
    render(
      <SafeResultForm
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
    const onDiscardSave = jest.fn()
    render(
      <SafeResultForm
        onSubmit={handleClickOnSafe}
        onSafeCosts={onSafeCosts}
        setOpenSafeResult={setOpenSafeResult}
        onDiscardSave={onDiscardSave}
      />
    )
    userEvent.click(screen.getByTestId('backbutton'))
    expect(onDiscardSave).toHaveBeenCalledTimes(1)
  })
})
