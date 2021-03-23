import styled from 'styled-components/macro'
import Button from '../Button/Button'
import Costinput from '../Inputs/CostInput'

export default function NewService({ onAddNewService, onOpenNewServiceForm }) {
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
        <label>
          Notiz(Optional):
          <ServiceNote
            aria-label="notes"
            data-testid="servicenote"
            name="notes"
            placeholder="Für Notizen zur Dienstleistung."
          ></ServiceNote>
        </label>
        <NewServiceButton>Hinzufügen</NewServiceButton>
        <ButtonBack
          data-testid="backbutton"
          onClick={() => onOpenNewServiceForm('home')}
        >
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

const Form = styled.form`
  display: grid;
  gap: 10px;
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
const ButtonBack = styled(Button)`
  background-color: var(--color-dark);
  color: var(--color-light);
  padding: 0.2em 0.6em;
  border-radius: 3px;
  font-size: 1.2rem;
`

const ServiceNote = styled.textarea`
  width: 100%;
  height: 90px;
  outline: none;
  resize: none;
  font-family: sans-serif;
  padding: 10px 8px;
`
