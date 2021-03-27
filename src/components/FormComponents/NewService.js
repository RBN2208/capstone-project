import styled from 'styled-components/macro'

import Button from '../Button/Button'
import Costinput from '../Inputs/CostInput'

export default function NewService({ onAddNewService, onAbort }) {
  return (
    <BlurContainer>
      <Form
        onSubmit={event => handleSubmit(event)}
        data-testid="newServiceForm"
      >
        <label>
          Name der Dienstleistung
          <input
            required
            name="service"
            maxLength="20"
            aria-label="service name"
            placeholder="Dienstleistung"
          />
        </label>
        <label>
          Stundensatz
          <Costinput currentCostsPerHour="default: 50" />
        </label>
        <label>
          Notiz(Optional):
          <ServiceNote
            name="notes"
            aria-label="notes for service"
            data-testid="servicenote"
            placeholder="Für Notizen zur Dienstleistung."
          ></ServiceNote>
        </label>
        <NewServiceButton>Hinzufügen</NewServiceButton>
        <ButtonBack aria-label="abort button" onClick={() => onAbort('')}>
          Zurück
        </ButtonBack>
      </Form>
    </BlurContainer>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const formElements = event.target.elements
    const costsPerHour = formElements.costs.value.replace(/[^\d]/g, '')
    const data = {
      name: formElements.service.value,
      costs: Number(costsPerHour) || Number(50),
      notes: formElements.notes.value,
    }
    onAddNewService(data)
  }
}

const BlurContainer = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 30px;
  background-color: var(--color-blur);
`

const Form = styled.form`
  display: grid;
  gap: 10px;
  padding: 20px;
  background: white;
  box-shadow: 0 0 10px var(--color-dark);
  border-radius: 5px;
`

const NewServiceButton = styled(Button)`
  color: var(--color-dark);
  background-color: var(--color-green);
`

const ButtonBack = styled(Button)`
  font-size: 1.2rem;
  padding: 0.2em 0.6em;
  border-radius: 3px;
  color: var(--color-light);
  background-color: var(--color-dark);
`

const ServiceNote = styled.textarea`
  width: 100%;
  height: 90px;
  outline: none;
  resize: none;
  font-family: sans-serif;
  padding: 10px 8px;
`
