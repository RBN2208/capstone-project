import styled from 'styled-components'

export default function Images({ url }) {
  return <IMG src={url} alt="" />
}
const IMG = styled.img`
  max-width: 100% !important;
  min-width: 300px !important;
  scroll-snap-align: start;
`
