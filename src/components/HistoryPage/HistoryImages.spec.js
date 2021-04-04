import { render, screen } from '@testing-library/react'
import HistoryImages from './HistoryImages'
import '@testing-library/jest-dom'

const urls = [{ url: 'https://source.unsplash.com/random' }]

describe('HistoryImages', () => {
  it('shows shows images from an url', () => {
    render(<HistoryImages urls={urls} />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
