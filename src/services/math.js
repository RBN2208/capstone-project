export function add(setState, value, newvalue) {
  setState(value + newvalue)
}

export function subtract(setState, value, newvalue) {
  setState(value - newvalue)
}

export function updatePlusTime(state, setState, time, position) {
  const object = state[position]
  setState([
    ...state.slice(0, position),
    { ...object, hours: time + 1 },
    ...state.slice(position + 1),
  ])
}

export function updateMinusTime(state, setState, time, position) {
  const object = state[position]
  setState([
    ...state.slice(0, position),
    { ...object, hours: time - 1 },
    ...state.slice(position + 1),
  ])
}

export function updateTimeValue(state, setState, position, newTimeValue) {
  const object = state[position]
  setState([
    ...state.slice(0, position),
    { ...object, costs: newTimeValue },
    ...state.slice(position + 1),
  ])
}
