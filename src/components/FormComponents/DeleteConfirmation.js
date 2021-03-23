import styled from 'styled-components/macro'
import Button from '../Button/Button'

export default function DeleteConfirmation({
  id,
  onDeleteHistoryEntry,
  setOpenConfirm,
}) {
  return (
    <ConfirmBox>
      <p>Soll der Eintrag wirklich gelöscht werden?</p>
      <ButtonWrapper>
        <ButtonGreen onClick={() => onDeleteHistoryEntry(id)}>Ja</ButtonGreen>
        <Button onClick={() => setOpenConfirm(false)}>Nein</Button>
      </ButtonWrapper>
    </ConfirmBox>
  )
}

const ConfirmBox = styled.div`
  display: grid;
  gap: 10px;
  text-align: center;
  padding: 10px;
  background-color: white;
  border: 2px solid black;
  border-radius: 5px;
  position: absolute;
  right: 65px;
  z-index: 1;
  transition: all 2s;
`
const ButtonWrapper = styled.div`
  display: flex;
`
const ButtonGreen = styled(Button)`
  background-color: var(--color-green);
  color: var(--color-dark);
  margin-right: 5px;
`
