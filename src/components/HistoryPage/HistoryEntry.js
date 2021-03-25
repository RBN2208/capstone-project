import useToggle from '../../hooks/useToggle'
import styled from 'styled-components/macro'
import Icon from 'supercons'
import ConfirmDialog from '../FormComponents/ConfirmDialog'
import HistoryDetails from './HistoryDetails'

export default function HistoryEntry({
  id,
  date,
  costs,
  keynote,
  urls,
  onDeleteHistoryEntry,
}) {
  const [openConfirm, toggleConfirm] = useToggle(false)
  const [openDetails, toggleDetails] = useToggle(false)

  return (
    <>
      <EntryWrapper>
        <TopWrapper>
          <h3>{keynote}</h3>
          <ButtonWrapper>
            <IconBox
              glyph="delete"
              width={'25'}
              height={'25'}
              viewBox="4 4 25 25"
              onClick={() => toggleConfirm(!openConfirm)}
            />
            <IconBox
              glyph="view"
              width={'25'}
              height={'25'}
              viewBox="6 6 20 20"
              onClick={() => toggleDetails(!openConfirm)}
            />
          </ButtonWrapper>
        </TopWrapper>
        <BottomWrapper>
          <p>Kalkulation vom {date} :</p>
          <CostValue>{costs}</CostValue>
        </BottomWrapper>
        {openConfirm === true && (
          <ConfirmDialog
            id={id}
            deleteEntry={onDeleteHistoryEntry}
            toggle={toggleConfirm}
            right={'70px'}
            top={'10px'}
          />
        )}
        {openDetails === true && (
          <HistoryDetails toggleDetails={toggleDetails} id={id} urls={urls} />
        )}
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
  align-items: center;
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
