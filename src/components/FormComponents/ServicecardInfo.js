import styled from 'styled-components/macro'
import Button from '../Button/Button'
import CostInput from '../Inputs/CostInput'
import ServiceConfirm from './ServiceConfirm'
import Icon from 'supercons'
import { useState } from 'react'

export default function ServicecardInfo({
  id,
  index,
  hours,
  currentCostsPerHour,
  setUsedCosts,
  onAddingNewCosts,
  onDeleteEntry,
}) {
  const handlePropagation = event => event.stopPropagation()
  const [openConfirm, setOpenConfirm] = useState(false)

  return (
    <InfoWrapper>
      <ServiceInfoForm
        data-testid="setCostsForm"
        onSubmit={event => handleSettingNewCosts(event)}
      >
        <div>Zeit: {hours} Stunden</div>
        <NewCostsBox>
          <label>
            Stundensatz:
            <CostInput
              currentCostsPerHour={currentCostsPerHour}
              onClick={handlePropagation}
            />
          </label>
          <Button onClick={handlePropagation}>Set</Button>
        </NewCostsBox>
      </ServiceInfoForm>
      <DeleteButton>
        <Icon
          glyph="view-close"
          width={'25'}
          height={'25'}
          viewBox="6 6 20 20"
          onClick={event => event.stopPropagation() & setOpenConfirm(true)}
        />
        {openConfirm === true && (
          <ServiceConfirm
            id={id}
            onDeleteEntry={onDeleteEntry}
            setOpenConfirm={setOpenConfirm}
          />
        )}
      </DeleteButton>
    </InfoWrapper>
  )
  function handleSettingNewCosts(event) {
    event.preventDefault()
    const formElement = event.target.elements
    const newCostsPerHour = parseFloat(formElement.setcosts.value)
    setUsedCosts(newCostsPerHour)
    onAddingNewCosts(index, newCostsPerHour, currentCostsPerHour, hours)
  }
}

const ServiceInfoForm = styled.form`
  display: grid;
  gap: 10px;
  grid-auto-flow: dense;
  input {
    width: 130px;
  }
`

const NewCostsBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
`

const InfoWrapper = styled.div`
  position: relative;
`

const DeleteButton = styled.div`
  position: absolute;
  top: -6px;
  right: 0px;
`
