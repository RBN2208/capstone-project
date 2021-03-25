import styled from 'styled-components'

export default function Images({ url }) {
  return <IMG src={url} alt="" width="300" />
}
const IMG = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
  scroll-snap-align: start;
`

/*
object-fit: contain;
max-width: 100%;
max-height: 100%;
width: auto;
height: auto;
*/
