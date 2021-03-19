import styled from 'styled-components'

export default function Costinput({ currentCostsPerHour }) {
  return (
    <CostInput
      data-testid="costInput"
      id="setcosts"
      name="costs"
      type="number"
      step="0.05"
      placeholder={currentCostsPerHour + '€'}
      onClick={event => event.stopPropagation()}
    />
  )
}

const CostInput = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`
