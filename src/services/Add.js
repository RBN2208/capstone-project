export default function add() {
  let totalSum = 0
  for (let values of arguments) {
    totalSum += values
  }
  return totalSum
}
