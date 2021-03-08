import { useState } from 'react'
import styled from 'styled-components'

export default function ServiceCard({ name, costs }) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <CardContainer onClick={() => setIsVisible(!isVisible)}>
      {name}
      {isVisible && <CardInfo>{costs}€</CardInfo>}
    </CardContainer>
  )
}

const CardContainer = styled.div`
  display: grid;
  gap: 10px;
  background-color: lightblue;
  padding: 10px;
`
const CardInfo = styled.div`
  background-color: whitesmoke;
  padding: 10px;
  margin: 5px -10px -10px -10px;
`
