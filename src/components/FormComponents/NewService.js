import styled from 'styled-components/macro'

export default function NewService({ setNewService }) {
  return (
    <>
      <Container>
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
      </Container>
    </>
  )
}

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(240, 240, 240, 0.7);
`

const Form = styled.form`
  display: grid;
`
