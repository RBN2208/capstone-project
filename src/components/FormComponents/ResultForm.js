import styled from 'styled-components'
import Button from '../Button/Button'

export default function ResultForm({
  finalCosts,
  setOpenSafeResult,
  onSafeCosts,
}) {
  return (
    <BlurContainer>
      <Form onSubmit={event => handleClickOnSafe(event)}>
        <p>Die aktuell geschätzten Kosten betragen:</p>
        <FinalCosts name="endresult">{finalCosts}€</FinalCosts>
        <ButtonSafe data-testid="safebutton">Speichern</ButtonSafe>
        <ButtonBack
          data-testid="backbutton"
          onClick={() => setOpenSafeResult('home')}
        >
          Zurück
        </ButtonBack>
      </Form>
    </BlurContainer>
  )
  function handleClickOnSafe(event) {
    event.preventDefault()
    const formElement = event.target.elements
    const savedCosts = formElement.endresult.value
    const currentDate = new Date().toLocaleDateString('de')
    const data = {
      date: currentDate,
      costs: savedCosts,
    }
    onSafeCosts(data)
  }
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
const FinalCosts = styled.output`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0;
`
const ButtonSafe = styled(Button)`
  background-color: var(--color-green);
  color: var(--color-dark);
`
const ButtonBack = styled.div`
  background-color: var(--color-dark);
  color: var(--color-light);
  padding: 0.2em 0.6em;
  border-radius: 3px;
  font-size: 1.2rem;
`
