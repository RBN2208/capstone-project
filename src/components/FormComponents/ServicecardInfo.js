import styled from 'styled-components/macro'
import Button from '../Button/Button'
import CostInput from '../Inputs/CostInput'
import Icon from 'supercons'

export default function ServicecardInfo({
  hours,
  notes,
  index,
  currentCostsPerHour,
  setUsedCosts,
  onAddingNewCosts,
  onDeleteEntry,
}) {
  const handlePropagation = event => event.stopPropagation()

  return (
    <InfoWrapper>
      <ServiceInfoForm
        data-testid="setCostsForm"
        onSubmit={event => handleSettingNewCosts(event)}
      >
        <div>Zeit: {hours} Stunden</div>
        <NewCostsBox>
          <label>
            Stundensatz:
            <CostInput
              currentCostsPerHour={currentCostsPerHour}
              onClick={handlePropagation}
            />
          </label>
          <Button onClick={handlePropagation}>Set</Button>
        </NewCostsBox>
      </ServiceInfoForm>
      <NoteWrapper>{notes}</NoteWrapper>
      <DeleteButton>
        <Icon
          glyph="view-close"
          width={'25'}
          height={'25'}
          viewBox="6 6 20 20"
          onClick={() => onDeleteEntry(index)}
        />
      </DeleteButton>
    </InfoWrapper>
  )
  function handleSettingNewCosts(event) {
    event.preventDefault()
    const formElement = event.target.elements
    const newCostsPerHour = parseFloat(formElement.setcosts.value)
    setUsedCosts(newCostsPerHour)
    onAddingNewCosts(index, newCostsPerHour, currentCostsPerHour, hours)
  }
}

const ServiceInfoForm = styled.form`
  display: grid;
  gap: 10px;
  grid-auto-flow: dense;
  input {
    width: 130px;
  }
`

const NewCostsBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
`

const InfoWrapper = styled.div`
  display: grid;
  gap: 15px;
  position: relative;
`

const DeleteButton = styled.div`
  position: absolute;
  top: -6px;
  right: 0px;
`

const NoteWrapper = styled.div`
  font-style: italic;
  font-size: medium;
`
