import { render, screen } from '@testing-library/react'

import HistoryDetails from './HistoryDetails'
import '@testing-library/jest-dom'

const usedServices = [
  { name: 'Test 1', hours: 3, costs: 50 },
  { name: 'Test 2', hours: 4, costs: 150 },
  { name: 'Test 3', hours: 5, costs: 250 },
]

describe('HistoryDetails', () => {
  it('displays the used services, costs and hours wich are saved', () => {
    render(<HistoryDetails usedServices={usedServices} />)
    expect(screen.getByText('Test 1')).toBeInTheDocument()
    expect(screen.getByText('3/h')).toBeInTheDocument()
    expect(screen.getByText('50€')).toBeInTheDocument()
  })
})
