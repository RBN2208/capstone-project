import styled from 'styled-components'

export default function HistoryEntry({ date, costs }) {
  return (
    <>
      <EntryBox>
        <p>Kalkulation vom {date} :</p>
        <CostValue>{costs}</CostValue>
      </EntryBox>
    </>
  )
}

const EntryBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 10px 0 10px 0;
  }
`
const CostValue = styled.p`
  font-weight: bold;
  font-size: 1.2em;
`
