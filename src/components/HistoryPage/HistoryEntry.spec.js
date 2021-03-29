import { render, screen } from '@testing-library/react'
import HistoryEntry from './HistoryEntry'
import '@testing-library/jest-dom'

const savedCosts = [
  { id: 1, date: '01.01.2021', costs: 50 },
  { id: 2, date: '02.02.2021', costs: 150 },
  { id: 3, date: '03.03.2021', costs: 250 },
]

describe('HistoryEntry', () => {
  it.todo('displays an entry with keynote and costs')
  it.todo('has three buttons with functions')
})
