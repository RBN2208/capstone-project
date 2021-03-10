import { render, screen } from '@testing-library/react'
import Result from './Result'
import '@testing-library/jest-dom'

describe('Result', () => {
  it('renders the sum of values', () => {
    render(<Result resultValue={500} />)
    expect(screen.getByText('Endpreis: ' + 500 + ' €')).toBeInTheDocument()
  })
})
