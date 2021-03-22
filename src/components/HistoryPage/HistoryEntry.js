import styled from 'styled-components/macro'
import Icon from 'supercons'
export default function HistoryEntry({
  id,
  date,
  costs,
  onDeleteHistoryEntry,
  lastCalculations,
}) {
  const index = lastCalculations.findIndex(param => param.id === id)

  return (
    <>
      <EntryBox>
        <p>Kalkulation vom {date} :</p>
        <CostValue>{costs}</CostValue>
        <DeleteButton>
          <Icon
            glyph="view-close"
            width={'25'}
            height={'25'}
            viewBox="6 6 20 20"
            onClick={() => onDeleteHistoryEntry(index)}
          />
        </DeleteButton>
      </EntryBox>
    </>
  )
}

const EntryBox = styled.div`
  width: 90%;
  position: relative;
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

const DeleteButton = styled.div`
  position: absolute;
  top: 6px;
  right: -40px;
`
