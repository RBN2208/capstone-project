import { render, screen } from '@testing-library/react'
import SaveResultForm from './SaveResultForm'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('SaveResultForm', () => {
  it('renders a form that displays the final costs', () => {
    render(<SaveResultForm finalCosts={200} />)
    expect(screen.getByText(200 + '€')).toBeInTheDocument()
  })
  it('has a button to safe the final costs', () => {
    const handleClickOnSafe = jest.fn()
    const onSaveCosts = jest.fn()
    const setOpenSafeResult = jest.fn()
    render(
      <SaveResultForm
        onSubmit={handleClickOnSafe}
        onSave={onSaveCosts}
        setOpenSafeResult={setOpenSafeResult}
      />
    )
    userEvent.click(screen.getByLabelText('safebutton'))
    expect(onSaveCosts).toHaveBeenCalledTimes(1)
  })
  it('has a button to get back', () => {
    const handleClickOnSafe = jest.fn()
    const onSaveCosts = jest.fn()
    const setOpenSafeResult = jest.fn()
    const onDiscardSave = jest.fn()
    render(
      <SaveResultForm
        onSubmit={handleClickOnSafe}
        onSave={onSaveCosts}
        setOpenSafeResult={setOpenSafeResult}
        onDiscardSave={onDiscardSave}
      />
    )
    userEvent.click(screen.getByLabelText('abortbutton'))
    expect(onDiscardSave).toHaveBeenCalledTimes(1)
  })
  it.todo('has a image upload function')
})
