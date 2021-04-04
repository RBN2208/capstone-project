import { render, screen } from '@testing-library/react'
import HistoryEntry from './HistoryEntry'
import '@testing-library/jest-dom'

const date = '01.02.2021'
const costs = '512'
const keynote = 'Herr Mustermann'

describe('HistoryEntry', () => {
  it('displays an entry with keynote and costs', () => {
    render(<HistoryEntry date={date} costs={costs} keynote={keynote} />)
    expect(screen.getByText('Kalkulation vom 01.02.2021 :')).toBeInTheDocument()
    expect(screen.getByText('512')).toBeInTheDocument()
    expect(screen.getByText('Herr Mustermann')).toBeInTheDocument()
  })
})
