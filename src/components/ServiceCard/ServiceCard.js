import { useState } from 'react'
import styled from 'styled-components/macro'

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
  background-color: white;
  padding: 10px;
  box-shadow: 0 0 5px #868686;
  border-radius: 7px;
  overflow: hidden;
`
const CardInfo = styled.div`
  background-color: gainsboro;
  padding: 10px;
  margin: 5px -10px -10px -10px;
`
