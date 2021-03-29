import { render, screen } from '@testing-library/react'

import HistoryDetails from './HistoryDetails'
import '@testing-library/jest-dom'

const savedCosts = [
  { id: 1, date: '01.01.2021', costs: 50 },
  { id: 2, date: '02.02.2021', costs: 150 },
  { id: 3, date: '03.03.2021', costs: 250 },
]

describe('HistoryDetails', () => {
  it.todo('displays the used services, costs and hours wich are saved')
})
