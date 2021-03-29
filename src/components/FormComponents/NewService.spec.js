import { render, screen } from '@testing-library/react'
import NewService from './NewService'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('NewService', () => {
  it('renders a Form to add a new service', () => {
    render(<NewService />)
    expect(screen.getByText('Name der Dienstleistung:')).toBeInTheDocument()
    expect(screen.getByText('Stundensatz:')).toBeInTheDocument()
  })
  it('has a submit button that submits data', () => {
    const submit = jest.fn()
    const newService = jest.fn()
    render(<NewService onSubmit={submit} onAddNewService={newService} />)
    expect(screen.getByLabelText('service name')).toHaveAttribute('required')
    userEvent.click(
      screen.getByRole('button', { name: 'add new service button' })
    )
    expect(newService).toHaveBeenCalled()
  })
  it('has a button to get back', () => {
    const submit = jest.fn()
    const newService = jest.fn()
    const onAbort = jest.fn()

    render(
      <NewService
        onSubmit={submit}
        onAddNewService={newService}
        onAbort={onAbort}
      />
    )
    userEvent.click(screen.getByRole('button', { name: 'abort button' }))
    expect(onAbort).toHaveBeenCalledTimes(1)
  })
})
