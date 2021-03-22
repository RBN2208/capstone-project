import { useState } from 'react'

export default function useDelete(index) {
  const [state, setState] = useState(index)

  function deleteEntry() {
    setState([...state.slice(0, index), ...state.slice(index + 1)])
  }
  return [state, deleteEntry]
}
