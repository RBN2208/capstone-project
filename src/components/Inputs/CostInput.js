import styled from 'styled-components'

export default function Costinput({ displayedCosts }) {
  return (
    <CostInput
      id="setcosts"
      name="costs"
      type="number"
      step="0.05"
      data-testid="costInput"
      placeholder={displayedCosts + '€'}
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
