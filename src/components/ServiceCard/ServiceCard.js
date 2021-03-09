import { useState } from 'react'
import styled from 'styled-components/macro'

export default function ServiceCard({ name, costs }) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <CardContainer onClick={() => setIsVisible(!isVisible)}>
      <Servicebox>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-up"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
          ></path>
        </svg>
        {name}
      </Servicebox>
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
  svg {
    width: 10px;
    rotate: 180deg;
    margin-right: 10px;
  }
`
const CardInfo = styled.div`
  background-color: gainsboro;
  padding: 10px;
  margin: 5px -10px -10px;
`

const Servicebox = styled.div`
  display: flex;
`
