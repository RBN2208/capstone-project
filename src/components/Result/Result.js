import styled from 'styled-components/macro'

export default function Result({ resultValue }) {
  return (
    <Resultbox>
      <span>Endpreis: {resultValue} €</span>
    </Resultbox>
  )
}

const Resultbox = styled.div`
  background-color: lightgreen;
  padding: 15px;
`
