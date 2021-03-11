export default function saveLocal(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}
