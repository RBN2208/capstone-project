export default function loadLocal(key) {
  const jsonString = localStorage.getItem(key)
  try {
    return JSON.parse(jsonString)
  } catch (error) {
    console.error(error)
  }
}
