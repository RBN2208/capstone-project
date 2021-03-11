import { useState } from 'react'
import styled from 'styled-components/macro'
import Button from '../Button/Button'
import ServicecardInfo from '../FormComponents/ServicecardInfo'

export default function ServiceCard({
  name,
  costs,
  onPlus,
  onMinus,
  updateLocalServiceValue,
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [counter, setCounter] = useState(0)
  const [usedCosts, setUsedCosts] = useState(costs)

  return (
    <CardContainer onClick={() => setIsVisible(!isVisible)}>
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
            disabled={counter === 0}
            aria-label="button-minus"
            onClick={handleClickMinus}
            bgColor={{ name: 'crimson' }}
          >
            -
          </Button>
          <Button
            aria-label="button-plus"
            onClick={handleClickPlus}
            bgColor={{ name: 'green' }}
          >
            +
          </Button>
        </ButtonBox>
      </Servicebox>

      {isVisible && (
        <CardInfo>
          <ServicecardInfo
            counter={counter}
            currentCosts={usedCosts}
            setNewCosts={setUsedCosts}
            updateLocalServiceValue={updateLocalServiceValue}
          />
        </CardInfo>
      )}
    </CardContainer>
  )

  function handleClickPlus(event) {
    event.stopPropagation()
    onPlus(usedCosts)
    setCounter(counter + 1)
  }

  function handleClickMinus(event) {
    event.stopPropagation()
    onMinus(usedCosts)
    setCounter(counter - 1)
  }
}

const CardContainer = styled.div`
  display: grid;
  gap: 5px;
  background-color: white;
  padding: 10px 15px;
  margin: 2px;
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
  padding: 15px;
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
  align-items: center;
  gap: 10px;
`
const TextBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9em;
`
