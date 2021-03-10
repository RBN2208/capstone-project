import styled from 'styled-components/macro'

export default function NewService({ setNewService }) {
  return (
    <>
      <BlurContainer>
        <Form>
          <label>
            Name der Dienstleistung
            <input placeholder="Bohren" />
          </label>
          <label>
            Stundensatz
            <input placeholder="default: 50€" />
          </label>
          <button onClick={() => setNewService('')}>Hinzufügen</button>
        </Form>
      </BlurContainer>
    </>
  )
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
