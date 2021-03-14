import { render, screen } from '@testing-library/react'
import ServicecardInfo from './ServicecardInfo'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('ServicecardInfo', () => {
  it('renders a form to change the cost value', () => {
    render(<ServicecardInfo />)
    expect(screen.getByLabelText('Stundensatz:')).toBeInTheDocument()
  })
  it('has a submit button that gets the new data', () => {
    const handleSets = jest.fn()
    const setCostChange = jest.fn()
    const setCosts = jest.fn()
    render(
      <ServicecardInfo
        onSubmit={handleSets}
        onAddingNewCosts={setCostChange}
        setUsedCosts={setCosts}
      />
    )
    userEvent.type(screen.getByTestId('costInput'), '50')
    expect(screen.getByTestId('setCostsForm')).toHaveFormValues({
      setcosts: 50,
    })
    userEvent.click(screen.getByRole('button'))
    expect(setCostChange).toHaveBeenCalledTimes(1)
  })
})
