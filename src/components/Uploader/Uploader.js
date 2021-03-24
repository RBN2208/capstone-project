import React from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'

const cloudname = 'du5gyoj7r'
const preset = 'xuusbzps'
// const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
// const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export default function Uploader({ images, setImages }) {
  return (
    <div>
      <Upload for="imageupload">
        Upload
        <Input
          id="imageupload"
          type="file"
          name="file"
          onChange={upload}
          accept=".png, .jpg, .jpeg"
        />
      </Upload>
    </div>
  )
  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${cloudname}/image/upload`

    const formData = new FormData()
    formData.append('file', event.target.files[0])
    formData.append('upload_preset', preset)
    console.log(images)
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
    const newImage = { id: uuidv4(), url: response.data.url }
    setImages([...images, newImage])
  }
}
const Upload = styled.label`
  display: block;
  width: min-content;
  height: min-content;
  background-color: cornflowerblue;
`

const Input = styled.input`
  display: none;
`
