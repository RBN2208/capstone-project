import { render, screen } from '@testing-library/react'
import NewService from './NewService'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('NewService', () => {
  it('renders a Form to add a new service', () => {
    render(<NewService />)
    expect(screen.getByLabelText('Name der Dienstleistung')).toBeInTheDocument()
    expect(screen.getByLabelText('Stundensatz')).toBeInTheDocument()
  })
  it('has a submit button that submits data', () => {
    const submitFunc = jest.fn()
    const newService = jest.fn()
    render(<NewService onSubmit={submitFunc} onAddNewService={newService} />)
    expect(screen.getByTestId('newServiceInput')).toHaveAttribute('required')
    userEvent.click(screen.getByRole('button'))
    expect(submitFunc).toHaveBeenCalledTimes(1)
  })
})
