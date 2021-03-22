import { useState } from 'react'
import styled from 'styled-components/macro'
import Button from '../Button/Button'
import ServicecardInfo from '../FormComponents/ServicecardInfo'
import useToggle from '../../hooks/useToggle'
import Icon from 'supercons'

export default function ServiceCard({
  index,
  name,
  costs,
  hours,
  onPlus,
  onMinus,
  onAddingNewCosts,
  adjustCurrentCosts,
  onDeleteEntry,
}) {
  const [isVisible, setIsVisible] = useToggle(false)
  const [usedCosts, setUsedCosts] = useState(costs)

  return (
    <CardContainer
      onClick={() => setIsVisible(!isVisible)}
      isVisible={isVisible}
    >
      <Servicebox>
        <TextBox>
          <Icon glyph="down-caret" />
          {name}
        </TextBox>
        <ButtonBox>
          <ButtonMinus
            disabled={hours === 0}
            aria-label="button-minus"
            onClick={handleClickMinus}
          >
            -
          </ButtonMinus>
          <ButtonPlus aria-label="button-plus" onClick={handleClickPlus}>
            +
          </ButtonPlus>
        </ButtonBox>
      </Servicebox>

      {isVisible && (
        <CardInfo>
          <ServicecardInfo
            hours={hours}
            index={index}
            currentCostsPerHour={usedCosts}
            setUsedCosts={setUsedCosts}
            onAddingNewCosts={onAddingNewCosts}
            adjustCurrentCosts={adjustCurrentCosts}
            onDeleteEntry={onDeleteEntry}
          />
        </CardInfo>
      )}
    </CardContainer>
  )

  function handleClickPlus(event) {
    event.stopPropagation()
    onPlus(usedCosts, hours, index)
  }

  function handleClickMinus(event) {
    event.stopPropagation()
    onMinus(usedCosts, hours, index)
  }
}

const CardContainer = styled.div`
  display: grid;
  gap: 5px;
  background-color: var(--color-lighter);
  padding: 10px 15px;
  margin: 2px;
  box-shadow: 0 0 5px var(--color-dark);
  border-radius: 7px;
  overflow: hidden;
  svg {
    rotate: ${props => (props.isVisible ? '180deg' : '0deg')};
  }
`
const CardInfo = styled.div`
  background-color: var(--color-light);
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

const ButtonMinus = styled(Button)`
  background-color: var(--color-red);
`

const ButtonPlus = styled(Button)`
  background-color: var(--color-green);
  color: var(--color-dark);
`

const TextBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9em;
`
