import axios from 'axios'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/image/upload`

export default function sendImageData(saveImage, event) {
  const form = new FormData()
  form.append('file', event.target.files[0])
  form.append('upload_preset', PRESET)
  axios
    .post(url, form, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    })
    .then(saveImage)
    .catch(err => console.error(err))
}
