export default function deleteEntry(state, setState, currentId) {
  setState(state.filter(entry => entry.id !== currentId))
}
