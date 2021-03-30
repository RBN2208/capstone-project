import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function Costinput({ defaultValue, displayedCosts, required }) {
  return (
    <CostInput
      required={required}
      id="setcosts"
      name="costs"
      type="number"
      step="0.05"
      data-testid="costInput"
      placeholder={defaultValue ?? displayedCosts + '€'}
      onClick={event => event.stopPropagation()}
    />
  )
}

Costinput.propTypes = {
  defaultValue: PropTypes.string,
  displayedCosts: PropTypes.number,
  required: PropTypes.bool,
}

const CostInput = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`
