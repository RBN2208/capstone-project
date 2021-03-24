import styled from 'styled-components'

export default function Images({ id, index, url }) {
  return <IMG src={url} alt="" id={id} />
}
const IMG = styled.img`
  width: 300px;
  flex-shrink: 0;
  height: 100%;
  scroll-snap-align: start;
`
