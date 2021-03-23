import styled from 'styled-components/macro'
import Button from '../Button/Button'

export default function ServiceConfirm({ id, onDeleteEntry, setOpenConfirm }) {
  return (
    <ConfirmBox>
      <p>Eintrag löschen?</p>
      <ButtonWrapper>
        <ButtonGreen onClick={() => onDeleteEntry(id)}>Ja</ButtonGreen>
        <Button onClick={() => setOpenConfirm(false)}>Nein</Button>
      </ButtonWrapper>
    </ConfirmBox>
  )
}

const ConfirmBox = styled.div`
  display: grid;
  gap: 5px;
  text-align: center;
  padding: 10px;
  background-color: white;
  border: 2px solid black;
  border-radius: 5px;
  position: absolute;
  right: 30px;
  top: -42px;
  width: 250px;
`
const ButtonWrapper = styled.div`
  display: flex;
`
const ButtonGreen = styled(Button)`
  background-color: var(--color-green);
  color: var(--color-dark);
  margin-right: 5px;
`
