import styled from 'styled-components/macro'
import Button from '../Button/Button'

export default function NewService({ onSubmit, onAddNewService }) {
  return (
    <>
      <BlurContainer>
        <Form onSubmit={event => handleSubmit(event)}>
          <label>
            Name der Dienstleistung
            <input
              maxLength="20"
              name="service"
              placeholder="Bohren"
              required
            />
          </label>
          <label>
            Stundensatz
            <input name="costs" placeholder="default: 50€" />
          </label>
          <Button bgColor={{ name: 'green' }}>Hinzufügen</Button>
        </Form>
      </BlurContainer>
    </>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const formElements = event.target.elements
    const data = {
      name: formElements.service.value,
      costs: Number(formElements.costs.value) || Number(50),
    }
    onAddNewService('home')
    onSubmit(data)
    console.log(data)
  }
}

const Form = styled.form`
  display: grid;
  padding: 20px;
  background: white;
  box-shadow: 0 0 10px darkgray;
  border-radius: 5px;
`
const BlurContainer = styled.div`
  position: absolute;
  background: rgba(240, 240, 240, 0.9);
  width: 100%;
  height: 100%;
  padding: 30px;
  display: grid;
  place-content: center;
`
