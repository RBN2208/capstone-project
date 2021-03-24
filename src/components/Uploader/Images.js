import styled from 'styled-components'

export default function Images({ id, url }) {
  return <IMG src={url} alt="" key={id} />
}
const IMG = styled.img`
  max-width: 100%;
  max-height: auto;
  flex-shrink: 0;
  scroll-snap-align: start;
  object-fit: contain;
`
