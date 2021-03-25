import styled from 'styled-components'

export default function Images({ url }) {
  return <IMG src={url} alt="" />
}
const IMG = styled.img`
  max-width: 300px;
  max-height: auto;
  scroll-snap-align: start;
`
