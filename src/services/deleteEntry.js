export function deleteEntry(state, setState, currentId) {
  setState(state.filter(entry => entry.id !== currentId))
}

export function useDelete(state, setState, index) {
  setState([...state.slice(0, index), ...state.slice(index + 1)])
}
