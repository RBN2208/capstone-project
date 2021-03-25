import styled from 'styled-components'

export default function Images({ url }) {
  return <IMG src={url} alt="" width="300" />
}
const IMG = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
  border: 2px solid white;
  scroll-snap-align: start;
`
