import { render } from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router'

describe('App', () => {
  it('renders the App', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
  })
})
