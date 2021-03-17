import styled from 'styled-components/macro'

export default function Appheader({ title }) {
  return <Header>{title}</Header>
}

const Header = styled.header`
  display: grid;
  place-content: center;
  background-color: var(--color-lighter);
  font-size: 20px;
  color: var(--color-dark);
  box-shadow: 0 0 10px black;
  height: 100%;
`
