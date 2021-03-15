import styled from 'styled-components'
import Button from '../Button/Button'

export default function ServicecardInfo({
  counter,
  currentCosts,
  setUsedCosts,
  onAddingNewCosts,
  index,
  adjustCurrentCosts
}) {
  return (
    <ServiceInfoForm
      data-testid="setCostsForm"
      onSubmit={event => handleSettingNewCosts(event)}
    >
      <div>Zeit: {counter} Stunden</div>
      <div>
        <label>
          Stundensatz:
          <CostInput
            data-testid="costInput"
            id="setcosts"
            name="setcosts"
            type="number"
            placeholder={currentCosts + '€'}
            onClick={event => event.stopPropagation()}
          />
        </label>
        <Button
          bgColor={{ name: 'grey' }}
          onClick={event => event.stopPropagation()}
        >
          Set
        </Button>
      </div>
    </ServiceInfoForm>
  )
  function handleSettingNewCosts(event) {
    event.preventDefault()
    const formElement = event.target.elements
    const newCosts = Number(formElement.setcosts.value)
    setUsedCosts(newCosts)
    onAddingNewCosts(index, newCosts)
    const data = { newCosts, currentCosts, counter }
    adjustCurrentCosts(data)
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
