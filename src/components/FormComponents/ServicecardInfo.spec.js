import { render, screen } from '@testing-library/react'
import ServicecardInfo from './ServicecardInfo'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('ServicecardInfo', () => {
  it('shows the current costs per hour, also when changed', () => {
    const { rerender } = render(<ServicecardInfo currentCostsPerHour={40} />)
    expect(screen.getByPlaceholderText('40€')).toBeInTheDocument()
    rerender(<ServicecardInfo currentCostsPerHour={55} />)
    expect(screen.getByPlaceholderText('55€')).toBeInTheDocument()
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
    expect(screen.getByTestId('setCostsForm')).toHaveFormValues(50)
    userEvent.click(screen.getByRole('button'))
    expect(setCostChange).toHaveBeenCalledTimes(1)
  })
  it.todo('rerender and check if value is changed')
})
