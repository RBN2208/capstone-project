import styled from 'styled-components'

export default function Images({ url }) {
  return <IMG src={url} alt="" width="300" />
}
const IMG = styled.img`
  object-fit: cover;
  height: auto;
  scroll-snap-align: start;
`
