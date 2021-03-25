import styled from 'styled-components'

export default function Images({ url }) {
  return <IMG src={url} alt="" />
}
const IMG = styled.img`
  max-width: 100%;
  max-height: auto;
  flex-shrink: 0;
  scroll-snap-align: start;
  object-fit: contain;
`
