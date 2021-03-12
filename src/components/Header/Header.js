import styled from 'styled-components/macro'

export default function Appheader({ title }) {
  return <Header>{title}</Header>
}

const Header = styled.header`
  display: grid;
  place-content: center;
  font-size: 20px;
  color: cornflowerblue;
  box-shadow: 0 0 10px black;
`
