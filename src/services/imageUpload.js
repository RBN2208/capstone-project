import axios from 'axios'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export function upload(event) {
  const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`

  const formData = new FormData()
  formData.append('file', event.target.files[0])
  formData.append('upload_preset', PRESET)

  axios
    .post(url, formData, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    })
    .then()
    .catch(err => console.error(err))
}
