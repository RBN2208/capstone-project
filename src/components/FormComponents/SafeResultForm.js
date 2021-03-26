import styled, { keyframes } from 'styled-components/macro'
import Icon from 'supercons'

import Button from '../Button/Button'
import sendImageData from '../../services/sendImageData'
import { useState } from 'react'

export default function ResultForm({ finalCosts, onDiscardSave, onSaveCosts }) {
  const [isLoading, setIsLoading] = useState(false)
  const [imageURLs, setImageURLs] = useState([])

  return (
    <BlurContainer>
      <Form
        onSubmit={event => handleClickOnSave(event)}
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
        <LoadingBox>
          <Upload isLoading={isLoading}>
            <Input type="file" name="file" onChange={upload} />
          </Upload>
          <UploadIcon
            glyph="photo"
            width={'45'}
            height={'45'}
            viewBox="1.5 1.5 30 30"
          />
        </LoadingBox>

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
    sendImageData(onImageSave, event)
    setIsLoading(true)
  }

  function onImageSave(response) {
    const url = { url: response.data.url }
    setImageURLs([...imageURLs, url])
    setIsLoading(false)
  }

  function handleClickOnSave(event) {
    event.preventDefault()
    const formElement = event.target.elements
    const currentDate = new Date().toLocaleDateString('de')
    const data = {
      date: currentDate,
      costs: formElement.endresult.value,
      keynote: formElement.keynote.value,
      urls: imageURLs,
    }
    onSaveCosts(data)
  }
}

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

const Form = styled.form`
  display: grid;
  gap: 10px;
  padding: 20px;
  background: white;
  box-shadow: 0 0 10px var(--color-dark);
  border-radius: 5px;
  text-align: center;
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

const loadingSpinner = keyframes`
  from {
    transform: rotate(0deg)
    }
  to {
    transform: rotate(360deg)
    }
`

const LoadingBox = styled.div`
  position: relative;
  width: 75%;
  margin: 0 auto;
`

const UploadIcon = styled(Icon)`
  position: absolute;
  top: 17%;
  left: 39.5%;
`

const Upload = styled.label`
  display: block;
  width: 70px;
  height: 70px;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 10px;
  border-radius: 50%;
  border: ${props =>
    props.isLoading ? '5px solid var(--color-green)' : '5px solid transparent'};
  border-top: ${props =>
    props.isLoading ? '5px solid var(--color-dark)' : '5px solid transparent'};
  animation-name: ${loadingSpinner};
  animation-duration: ${props => (props.isLoading ? '0.5s' : '')};
  animation-iteration-count: ${props => (props.isLoading ? 'infinite' : '')};
  animation-timing-function: ${props => (props.isLoading ? 'linear' : '')};
`

const Input = styled.input`
  display: none;
`
/*
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}
*/
