import styled from 'styled-components'
import Button from '../Button/Button'

export default function SafeResult({ finalCosts, setOpenSafeResult }) {
  return (
    <BlurContainer>
      <Form>
        <p>Die aktuell geschätzten Kosten betragen:</p>
        <FinalCosts>{finalCosts}€</FinalCosts>
        <ButtonSafe onClick={() => setOpenSafeResult('home')}>
          Speichern
        </ButtonSafe>
        <Button onClick={() => setOpenSafeResult('home')}>Zurück</Button>
      </Form>
    </BlurContainer>
  )
}

const Form = styled.form`
  display: grid;
  gap: 10px;
  padding: 20px;
  background: white;
  box-shadow: 0 0 10px var(--color-dark);
  border-radius: 5px;
  text-align: center;
`
const BlurContainer = styled.div`
  position: absolute;
  top: 0;
  background: var(--color-blur);
  width: 100%;
  height: 100%;
  padding: 30px;
  display: grid;
  place-content: center;
`
const FinalCosts = styled.h3`
  margin-top: 0;
`
const ButtonSafe = styled(Button)`
  background-color: var(--color-green);
  color: var(--color-dark);
`
