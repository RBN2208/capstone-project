import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
html{
  --color-dark: #32323C;
  --color-midgrey:#8F8F94;
  --color-light: #EBEBEB;
  --color-lighter: #FFF;
  --color-green:#9CE37D;
  --color-darkgreen:#007A5F;
  --color-red: #E3294C;
  --color-blur: rgba(240,240,240,0.8)
}
* {
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  font-size: 112.5%;
  margin: 0 auto;
}
input,
button {
  font-size: inherit;
  padding: 5px;
}
`
