import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root{
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
  overflow: hidden;
  scrollbar-width: none;
}
input,
button,textarea {
  font-size: inherit;
  padding: 5px;
  outline: none;
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--color-midgrey);
}

`
