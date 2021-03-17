import styled from 'styled-components/macro'
import Button from '../Button/Button'

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
            data-testid="costInput"
            id="setcosts"
            name="setcosts"
            type="number"
            placeholder={currentCostsPerHour + '€'}
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
    const newCostsPerHour = Number(formElement.setcosts.value)
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

const CostInput = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`
