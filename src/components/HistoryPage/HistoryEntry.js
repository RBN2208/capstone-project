import styled from 'styled-components'

export default function HistoryEntry({ date, costs }) {
  return (
    <>
      <p>Kalkulation vom {date} :</p>
      <span>{costs}</span>
    </>
  )
}
