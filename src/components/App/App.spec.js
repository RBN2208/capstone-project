import { render } from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom'

describe('App', () => {
  it('renders the App', () => {
    render(<App />)
  })
})
