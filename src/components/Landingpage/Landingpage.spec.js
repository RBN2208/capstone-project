import { render, screen, act } from '@testing-library/react'
import Landingpage from './Landingpage'
import '@testing-library/jest-dom'

describe('Landingpage', () => {
  it('renders the landingpage', () => {
    render(<Landingpage />)
    expect(screen.getByText('calcuFix')).toBeVisible()
  })
  it('dont renders the landingpage after a given amout of time', () => {
    jest.useFakeTimers()
    render(<Landingpage />)
    expect(screen.getByText('calcuFix')).toBeVisible()

    expect(setTimeout).toHaveBeenCalledTimes(1)
    act(() => {
      jest.advanceTimersByTime(9000)
    })
    expect(screen.getByText('calcuFix')).not.toBeVisible()
  })
})
