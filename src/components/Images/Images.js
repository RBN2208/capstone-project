import styled from 'styled-components'

export default function Images({ url }) {
  return <IMG src={url} alt="" />
}
const IMG = styled.img`
  max-width: 100%;
  min-width: 300px;
  height: auto;
  scroll-snap-align: start;
`
