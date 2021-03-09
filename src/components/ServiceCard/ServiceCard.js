import { useState } from 'react'
import styled from 'styled-components/macro'
import Button from '../Button/Button'

export default function ServiceCard({ name, costs }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isActive, setIsActive] = useState(false)

  return (
    <CardContainer isActive={isActive} onClick={() => setIsVisible(!isVisible)}>
      <Servicebox>
        <TextBox>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-up"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
          </svg>
          {name}
        </TextBox>
        <ButtonBox>
          <Button
            onClick={e => e.stopPropagation(setIsActive(false))}
            bgColor={{ name: 'red' }}
          >
            -
          </Button>
          <Button
            onClick={e => e.stopPropagation(setIsActive(true))}
            bgColor={{ name: 'green' }}
          >
            +
          </Button>
        </ButtonBox>
      </Servicebox>
      {isVisible && <CardInfo>{costs}€</CardInfo>}
    </CardContainer>
  )
}

const CardContainer = styled.div`
  display: grid;
  gap: 10px;
  background-color: ${props => (props.isActive ? 'lightgreen' : 'white')};
  padding: 15px;
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
  margin: 5px -15px -15px;
`

const Servicebox = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 60px;
`
const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`
const TextBox = styled.div`
  display: flex;
  align-items: center;
`
