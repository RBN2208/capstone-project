import { useState } from 'react'
import styled from 'styled-components/macro'
import Icon from 'supercons'
import useToggle from '../../hooks/useToggle'

import Button from '../Button/Button'
import ServicecardInfo from '../FormComponents/ServicecardInfo'

export default function ServiceCard({
  id,
  index,
  name,
  costs,
  hours,
  notes,
  onPlus,
  onMinus,
  onAddingNewCosts,
  onDeleteEntry,
}) {
  const [detailsVisible, setDetailsVisible] = useToggle(false)
  const [currentUsedCosts, setCurrentUsedCosts] = useState(costs)

  return (
    <CardContainer
      onClick={() => setDetailsVisible(!detailsVisible)}
      openDetails={detailsVisible}
      data-testid="cardcontainer"
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

      {detailsVisible && (
        <CardInfo>
          <ServicecardInfo
            id={id}
            index={index}
            hours={hours}
            notes={notes}
            currentCostsPerHour={currentUsedCosts}
            setUsedCosts={setCurrentUsedCosts}
            onAddingNewCosts={onAddingNewCosts}
            onDeleteEntry={onDeleteEntry}
          />
        </CardInfo>
      )}
    </CardContainer>
  )

  function handleClickPlus(event) {
    event.stopPropagation()
    onPlus(currentUsedCosts, hours, index)
  }

  function handleClickMinus(event) {
    event.stopPropagation()
    onMinus(currentUsedCosts, hours, index)
  }
}

const CardContainer = styled.section`
  display: grid;
  gap: 5px;
  background-color: var(--color-lighter);
  padding: 10px 15px;
  margin: 2px;
  box-shadow: 0 0 5px var(--color-dark);
  border-radius: 7px;
  overflow: hidden;
  svg {
    rotate: ${props => (props.openDetails ? '180deg' : '0deg')};
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
`

const ButtonMinus = styled(Button)`
  background-color: var(--color-red);
  margin-right: 5px;
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
