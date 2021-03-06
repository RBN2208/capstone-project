import styled from 'styled-components/macro'
import Icon from 'supercons'
import PropTypes from 'prop-types'

export default function ResultField({ finalCosts, onSaveResult }) {
  return (
    <Resultbox data-testid="resultBox">
      <span>Endpreis: {finalCosts} €</span>
      <Checkmark
        aria-label="save result"
        data-testid="save-result-button"
        glyph="checkmark"
        width={'40'}
        height={'40'}
        viewBox="5 4 24 24"
        role="button"
        onClick={() => onSaveResult('openSaveResult')}
      />
    </Resultbox>
  )
}

ResultField.propTypes = {
  finalCosts: PropTypes.number,
  onSaveResult: PropTypes.func,
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
