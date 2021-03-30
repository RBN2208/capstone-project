import styled from 'styled-components/macro'
import Icon from 'supercons'
import PropTypes from 'prop-types'

export default function ResultField({ finalCosts, onSaveResult }) {
  return (
    <Resultbox>
      <span>Endpreis: {finalCosts} €</span>
      <Checkmark
        aria-label="save result"
        glyph="checkmark"
        width={'40'}
        height={'40'}
        viewBox="5 4 24 24"
        onClick={() => onSaveResult('openSaveResult')}
      />
    </Resultbox>
  )
}

ResultField.propTypes = {
  finalCosts: PropTypes.number.isRequired,
  onSaveResult: PropTypes.func.isRequired,
}

const Resultbox = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  padding: 20px;
  background-color: var(--color-green);
`
const Checkmark = styled(Icon)`
  color: var(--color-darkgreen);
`
