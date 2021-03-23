import { useState } from 'react'
import styled from 'styled-components/macro'
import Icon from 'supercons'
import HistoryConfirm from '../FormComponents/HistoryConfirm'

export default function HistoryEntry({
  id,
  date,
  costs,
  keynote,
  onDeleteHistoryEntry,
}) {
  const [openConfirm, setOpenConfirm] = useState(false)
  return (
    <>
      <EntryWrapper>
        <TopWrapper>
          <h3>{keynote}</h3>
          <ButtonWrapper style={{ color: 'black' }}>
            <IconBox
              glyph="delete"
              width={'25'}
              height={'25'}
              viewBox="4 4 25 25"
              onClick={() => setOpenConfirm(true)}
            />
            <IconBox
              glyph="view"
              width={'25'}
              height={'25'}
              viewBox="6 6 20 20"
              onClick={() => console.log('opens the details!')}
            />
            {openConfirm === true && (
              <HistoryConfirm
                id={id}
                onDeleteHistoryEntry={onDeleteHistoryEntry}
                setOpenConfirm={setOpenConfirm}
              />
            )}
          </ButtonWrapper>
        </TopWrapper>
        <BottomWrapper>
          <p>Kalkulation vom {date} :</p>
          <CostValue>{costs}</CostValue>
        </BottomWrapper>
      </EntryWrapper>
    </>
  )
}

const EntryWrapper = styled.section`
  position: relative;
  display: grid;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--color-midgrey);
  h3 {
    margin-top: 0;
  }
  p {
    margin: 10px 0;
  }
`
const CostValue = styled.p`
  font-weight: bold;
  font-size: 1.2em;
`

const TopWrapper = styled.section`
  display: flex;
  justify-content: space-between;
`

const BottomWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  position: relative;
`
const ButtonWrapper = styled.div`
  display: flex;
`
const IconBox = styled(Icon)`
  border: 1px solid grey;
  padding: 3px;
  border-radius: 2px;
  margin: 0 5px;
`

/*
            {openConfirm === true && (
              <HistoryConfirm
                id={id}
                onDeleteHistoryEntry={onDeleteHistoryEntry}
                setOpenConfirm={setOpenConfirm}
              />
            )}

*/
