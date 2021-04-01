import { useState } from 'react'
import styled from 'styled-components/macro'

import Button from '../Button/Button'
import Costinput from '../Inputs/CostInput'

export default function NewService({ onAddNewService, onAbort }) {
  const [nameLength, setNameLength] = useState(0)

  return (
    <BlurContainer>
      <Form
        onSubmit={event => handleSubmit(event)}
        data-testid="newServiceForm"
      >
        <label>
          Name der Dienstleistung:
          <input
            required
            name="service"
            maxLength="20"
            data-testid="new-service-name"
            aria-label="service name"
            placeholder="z.B. Verspachteln"
            onChange={event => setNameLength(event.target.value.length)}
          />
          <CountedLetters>{nameLength}/20</CountedLetters>
        </label>
        <label>
          Stundensatz:
          <Costinput defaultValue="z.B. 1€/1.50€, default: 50€" />
        </label>
        <label>
          Notiz(Optional):
          <ServiceNote
            name="notes"
            maxLength="100"
            aria-label="notes for service"
            data-testid="servicenote"
            placeholder="Für Notizen zur Dienstleistung."
          ></ServiceNote>
        </label>

        <NewServiceButton
          data-testid="add-new-service"
          aria-label="add new service button"
        >
          Hinzufügen
        </NewServiceButton>
        <ButtonBack aria-label="abort button" onClick={() => onAbort('')}>
          Abbrechen
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
  gap: 20px;
  padding: 20px;
  background: white;
  box-shadow: 0 0 10px var(--color-dark);
  border-radius: 5px;
  width: 275px;
  label {
    position: relative;
    display: grid;
    gap: 3px;
    input {
      font-size: 90%;
    }
  }
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
const CountedLetters = styled.span`
  position: absolute;
  top: 41px;
  right: 3px;
  font-size: 0.8rem;
  color: var(--color-midgrey);
`
