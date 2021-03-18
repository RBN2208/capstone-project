import styled from 'styled-components/macro'
import Button from '../Button/Button'
import Costinput from '../Inputs/CostInput'

export default function NewService({ onSubmit }) {
  return (
    <BlurContainer>
      <Form
        onSubmit={event => handleSubmit(event)}
        data-testid="newServiceForm"
      >
        <label>
          Name der Dienstleistung
          <input
            aria-label="dienstleistung"
            data-testid="newServiceInput"
            maxLength="20"
            name="service"
            placeholder="Dienstleistung"
            required
          />
        </label>
        <label>
          Stundensatz
          <Costinput currentCostsPerHour="default: 50" />
        </label>
        <NewServiceButton>Hinzufügen</NewServiceButton>
      </Form>
    </BlurContainer>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const formElements = event.target.elements
    const costValue = formElements.costs.value.replace(/[^\d]/g, '')
    const data = {
      name: formElements.service.value,
      costs: Number(costValue) || Number(50),
    }
    onSubmit(data)
  }
}

const Form = styled.form`
  display: grid;
  padding: 20px;
  background: white;
  box-shadow: 0 0 10px var(--color-dark);
  border-radius: 5px;
`
const BlurContainer = styled.div`
  position: absolute;
  background: var(--color-blur);
  width: 100%;
  height: 100%;
  padding: 30px;
  display: grid;
  place-content: center;
`
const NewServiceButton = styled(Button)`
  background-color: var(--color-green);
  color: var(--color-dark);
`
