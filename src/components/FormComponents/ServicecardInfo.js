import styled from 'styled-components/macro'
import Button from '../Button/Button'
import CostInput from '../Inputs/CostInput'

export default function ServicecardInfo({
  hours,
  currentCostsPerHour,
  setUsedCosts,
  onAddingNewCosts,
  index,
}) {
  return (
    <ServiceInfoForm
      data-testid="setCostsForm"
      onSubmit={event => handleSettingNewCosts(event)}
    >
      <div>Zeit: {hours} Stunden</div>
      <div>
        <label>
          Stundensatz:
          <CostInput
            currentCostsPerHour={currentCostsPerHour}
            onClick={event => event.stopPropagation()}
          />
        </label>
        <Button onClick={event => event.stopPropagation()}>Set</Button>
      </div>
    </ServiceInfoForm>
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
  grid-auto-flow: dense;
  input {
    width: 130px;
  }
`
