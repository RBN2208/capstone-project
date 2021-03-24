import React, { useState } from 'react'
import axios from 'axios'

const cloudname = 'du5gyoj7r'
const preset = 'xuusbzps'
// const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
// const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export default function Uploader() {
  const [image, setImage] = useState('')

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${cloudname}/image/upload`

    const formData = new FormData()
    formData.append('file', event.target.files[0])
    formData.append('upload_preset', preset)
    console.log(image)
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
    setImage(response.data.url)
  }

  return (
    <div>
      <img src={image} alt="" style={{ width: '20%' }} />

      <input type="file" name="file" onChange={upload} />
    </div>
  )
}
