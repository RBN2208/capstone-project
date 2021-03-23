import styled from 'styled-components/macro'
import Button from '../Button/Button'
import CostInput from '../Inputs/CostInput'
import ConfirmDialog from './ConfirmDialog'
import Icon from 'supercons'
import { useState } from 'react'

export default function ServicecardInfo({
  id,
  index,
  hours,
  notes,
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
      <NoteWrapper>{notes}</NoteWrapper>
      <DeleteButton>
        <DeleteIcon>
          <Icon
            glyph="delete"
            width={'25'}
            height={'25'}
            viewBox="4 4 25 25"
            onClick={event => event.stopPropagation() & setOpenConfirm(true)}
          />
        </DeleteIcon>

        {openConfirm === true && (
          <ConfirmDialog
            id={id}
            deleteEntry={onDeleteEntry}
            toggle={setOpenConfirm}
            right={'30px'}
            top={'5px'}
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
  height: min-content;
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
  display: grid;
  gap: 15px;
  position: relative;
`

const DeleteButton = styled.div`
  position: absolute;
  top: -11px;
  right: 0px;
`
const DeleteIcon = styled.div`
  rotate: 180deg;
`
const NoteWrapper = styled.div`
  font-style: italic;
  font-size: medium;
`
