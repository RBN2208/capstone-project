import styled, { keyframes } from 'styled-components/macro'
import { useState } from 'react'
import sendImageData from '../../services/sendImageData'
import Icon from 'supercons'

import Button from '../Button/Button'

export default function SaveResultForm({
  finalCosts,
  onDiscardSave,
  onSaveCosts,
}) {
  const [isUpLoading, setIsUpLoading] = useState(false)
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
            required
            max="20"
            name="keynote"
            placeholder="z.B. Herr Müller"
            aria-label="keynote for saved calculation"
          />
        </Keynotes>

        <span>Und Fotos?</span>
        <LoadingBox>
          <Upload uploading={isUpLoading}>
            <Input
              type="file"
              name="fileupload"
              aria-label="File upload"
              onChange={upload}
            />
          </Upload>
          <UploadIcon
            glyph="photo"
            width={'45'}
            height={'45'}
            viewBox="1.5 1.5 30 30"
          />
        </LoadingBox>

        <SafeButton aria-label="safebutton">Speichern</SafeButton>
        <AbortButton aria-label="abortbutton" onClick={() => onDiscardSave('')}>
          Zurück
        </AbortButton>
      </Form>
    </BlurContainer>
  )

  function upload(event) {
    sendImageData(onImageSave, event)
    setIsUpLoading(true)
  }

  function onImageSave(response) {
    const url = { url: response.data.url }
    setImageURLs([...imageURLs, url])
    setIsUpLoading(false)
  }

  function handleClickOnSave(event) {
    event.preventDefault()
    const formElement = event.target.elements
    const dateOnSave = new Date().toLocaleDateString('de')
    const data = {
      date: dateOnSave,
      costs: formElement.endresult.value,
      keynote: formElement.keynote.value,
      urls: imageURLs,
    }
    onSaveCosts(data)
  }
}

const BlurContainer = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
  padding: 30px;
  position: absolute;
  top: 0;
  background-color: var(--color-blur);
`

const Form = styled.form`
  display: grid;
  gap: 10px;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 10px var(--color-dark);
  background-color: white;
`

const FinalCosts = styled.output`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
`

const SafeButton = styled(Button)`
  color: var(--color-dark);
  background-color: var(--color-green);
`

const AbortButton = styled(Button)`
  padding: 0.2em 0.6em;
  font-size: 1.2rem;
  border-radius: 3px;
  color: var(--color-light);
  background-color: var(--color-dark);
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
  pointer-events: none;
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
    props.uploading ? '5px solid var(--color-green)' : '5px solid transparent'};
  border-top: ${props =>
    props.uploading ? '5px solid var(--color-dark)' : '5px solid transparent'};
  animation-name: ${loadingSpinner};
  animation-duration: ${props => (props.uploading ? '0.5s' : '')};
  animation-iteration-count: ${props => (props.uploading ? 'infinite' : '')};
  animation-timing-function: ${props => (props.uploading ? 'linear' : '')};
`

const Input = styled.input`
  display: none;
`
