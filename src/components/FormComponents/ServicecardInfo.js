import styled from 'styled-components/macro'
import Icon from 'supercons'
import PropTypes from 'prop-types'
import useToggle from '../../hooks/useToggle'

import Button from '../Button/Button'
import CostInput from '../Inputs/CostInput'
import ConfirmDialog from './ConfirmDialog'

export default function ServicecardInfo({
  id,
  index,
  hours,
  notes,
  setUsedCosts,
  currentCostsPerHour,
  onAddingNewCosts,
  onDeleteEntry,
}) {
  const handlePropagation = event => event.stopPropagation()
  const [openConfirm, toggleConfirm] = useToggle(false)

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
            <CostInput required displayedCosts={currentCostsPerHour} />
          </label>
          <Button onClick={handlePropagation}>Set</Button>
        </NewCostsBox>
      </ServiceInfoForm>
      <NoteWrapper>{notes}</NoteWrapper>
      <IconBox>
        <DeleteIcon>
          <Icon
            glyph="delete"
            width={'25'}
            height={'25'}
            viewBox="4 4 25 25"
            onClick={event =>
              event.stopPropagation() & toggleConfirm(!openConfirm)
            }
          />
        </DeleteIcon>

        {openConfirm === true && (
          <ConfirmDialog
            id={id}
            top={'5px'}
            right={'30px'}
            toggle={toggleConfirm}
            onDeleteEntry={onDeleteEntry}
          />
        )}
      </IconBox>
    </InfoWrapper>
  )
  function handleSettingNewCosts(event) {
    event.preventDefault()
    const formElement = event.target.elements
    const toRound = parseFloat(formElement.setcosts.value)
    const newCostsPerHour = Math.round(toRound / 0.5) * 0.5
    setUsedCosts(newCostsPerHour)
    onAddingNewCosts(index, newCostsPerHour, currentCostsPerHour, hours)
  }
}

ServicecardInfo.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number.isRequired,
  hours: PropTypes.number,
  notes: PropTypes.string,
  setUsedCosts: PropTypes.func.isRequired,
  currentCostsPerHour: PropTypes.number.isRequired,
  onAddingNewCosts: PropTypes.func,
  onDeleteEntry: PropTypes.func,
}

const InfoWrapper = styled.section`
  display: grid;
  gap: 15px;
  position: relative;
`

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

const IconBox = styled.div`
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
