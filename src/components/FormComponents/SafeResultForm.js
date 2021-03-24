import styled from 'styled-components'
import Button from '../Button/Button'
import Uploader from '../Uploader/Uploader'

export default function ResultForm({
  finalCosts,
  onDiscardSave,
  onSafeCosts,
  images,
  setImages,
}) {
  return (
    <BlurContainer>
      <Form
        onSubmit={event => handleClickOnSafe(event)}
        data-testid="safeResultForm"
      >
        <p>Die aktuell geschätzten Kosten betragen:</p>
        <FinalCosts name="endresult">{finalCosts}€</FinalCosts>
        <Keynotes>
          Füge noch ein Stichwort hinzu!
          <input
            name="keynote"
            placeholder="z.B. Herr Müller"
            max="20"
            required
          />
        </Keynotes>
        <ButtonSafe data-testid="safebutton">Speichern</ButtonSafe>
        <ButtonBack
          data-testid="backbutton"
          onClick={() => onDiscardSave('home')}
        >
          Zurück
        </ButtonBack>
        <Uploader images={images} setImages={setImages} />
      </Form>
    </BlurContainer>
  )
  function handleClickOnSafe(event) {
    event.preventDefault()
    const formElement = event.target.elements
    const finalCosts = formElement.endresult.value
    const keynote = formElement.keynote.value
    const currentDate = new Date().toLocaleDateString('de')
    const URL = images[0].url
    const data = {
      date: currentDate,
      costs: finalCosts,
      keynote,
      URL,
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
  margin-bottom: 20px;
`
const ButtonSafe = styled(Button)`
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
const Keynotes = styled.label`
  display: grid;
  gap: 10px;
`
