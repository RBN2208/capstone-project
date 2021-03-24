import styled from 'styled-components/macro'
import Button from '../Button/Button'

export default function ConfirmDialog({ id, deleteEntry, toggle, right, top }) {
  const state = () => toggle()

  return (
    <ConfirmBox right={right} top={top}>
      <p>Eintrag löschen?</p>
      <ButtonWrapper>
        <ButtonGreen onClick={() => deleteEntry(id)}>Ja</ButtonGreen>
        <Button onClick={event => handleClick(event)}>Nein</Button>
      </ButtonWrapper>
    </ConfirmBox>
  )
  function handleClick(event) {
    event.stopPropagation()
    state(false)
  }
}

const ConfirmBox = styled.div`
  display: grid;
  gap: 10px;
  text-align: center;
  padding: 10px;
  background-color: white;
  border: 2px solid black;
  border-radius: 5px;
  width: 250px;
  box-shadow: 0 0 10px black;
  position: absolute;
  right: ${props => props.right};
  top: ${props => props.top};
  p {
    margin: 0;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
`
const ButtonGreen = styled(Button)`
  background-color: var(--color-green);
  color: var(--color-dark);
  margin-right: 5px;
`
