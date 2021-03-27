import { useState } from 'react'

export default function useToggle(startValue) {
  const [state, setState] = useState(startValue)

  function toggle() {
    setState(!state)
  }

  function toggleFalse() {
    setState(false)
  }
  return [state, toggle, toggleFalse]
}
