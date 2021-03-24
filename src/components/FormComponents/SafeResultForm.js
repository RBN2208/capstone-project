import styled from 'styled-components'
import Icon from 'supercons'

import Button from '../Button/Button'
import axios from 'axios'
const cloudname = 'du5gyoj7r'
const preset = 'xuusbzps'

export default function ResultForm({ finalCosts, onDiscardSave, onSafeCosts }) {
  const imageURLs = []
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
        <span>Und Foto´s?</span>
        <Upload>
          <Icon
            glyph="photo"
            width={'45'}
            height={'45'}
            viewBox="1.5 1.5 30 30"
          />
          <Input
            type="file"
            name="file"
            onChange={upload}
            accept=".png, .jpg, .jpeg"
          />
        </Upload>
        <ButtonSafe data-testid="safebutton">Speichern</ButtonSafe>
        <ButtonBack
          data-testid="backbutton"
          onClick={() => onDiscardSave('home')}
        >
          Zurück
        </ButtonBack>
      </Form>
    </BlurContainer>
  )
  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${cloudname}/image/upload`

    const formData = new FormData()
    formData.append('file', event.target.files[0])
    formData.append('upload_preset', preset)
    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(onImageSave)
      .catch(err => console.error(err))
  }

  function onImageSave(response) {
    const url = { url: response.data.url }
    imageURLs.push(url)
  }

  function handleClickOnSafe(event) {
    event.preventDefault()
    const formElement = event.target.elements
    const finalCosts = formElement.endresult.value
    const keynote = formElement.keynote.value
    const currentDate = new Date().toLocaleDateString('de')
    const data = {
      date: currentDate,
      costs: finalCosts,
      keynote,
      url: imageURLs,
    }
    onSafeCosts(data)
    console.log(imageURLs)
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
  margin-bottom: 10px;
`
const Upload = styled.label`
  display: flex;
  padding: 10px;
  margin: 0 auto;
  border: 2px dotted black;
  border-radius: 50px;
  margin-bottom: 10px;
`

const Input = styled.input`
  display: none;
`
