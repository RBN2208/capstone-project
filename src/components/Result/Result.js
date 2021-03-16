import styled from 'styled-components/macro'

export default function Result({ resultValue }) {
  return (
    <Resultbox>
      <span>Endpreis: {resultValue} €</span>
    </Resultbox>
  )
}

const Resultbox = styled.div`
  width: 75%;
  background-color: lightgreen;
  padding: 15px;
`
