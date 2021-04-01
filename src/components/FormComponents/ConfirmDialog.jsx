import styled from 'styled-components/macro'
import Button from '../Button/Button'
import PropTypes from 'prop-types'

export default function ConfirmDialog({
  id,
  top,
  right,
  toggle,
  onDeleteEntry,
}) {
  const state = () => toggle()

  return (
    <ConfirmBox right={right} top={top}>
      <p>Eintrag löschen?</p>
      <ButtonWrapper>
        <ButtonGreen
          data-testid="delete-entry"
          onClick={() => onDeleteEntry(id)}
        >
          Ja
        </ButtonGreen>
        <Button
          data-testid="abort-delete"
          onClick={event => handleClick(event)}
        >
          Nein
        </Button>
      </ButtonWrapper>
    </ConfirmBox>
  )
  function handleClick(event) {
    event.stopPropagation()
    state(false)
  }
}

ConfirmDialog.propTypes = {
  id: PropTypes.string,
  top: PropTypes.string,
  right: PropTypes.string,
  toggle: PropTypes.func,
  onDeleteEntry: PropTypes.func,
}

const ConfirmBox = styled.section`
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
