import styled from 'styled-components/macro'
import Icon from 'supercons'

export default function ResultField({ finalCosts, onSafeResult }) {
  return (
    <Resultbox>
      <span>Endpreis: {finalCosts} €</span>
      <Checkmark
        data-testid="saveResultButton"
        glyph="checkmark"
        width={'40'}
        height={'40'}
        viewBox="5 4 24 24"
        onClick={() => onSafeResult('openSafeResult')}
      />
    </Resultbox>
  )
}

const Resultbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  background-color: var(--color-green);
  padding: 20px;
`
const Checkmark = styled(Icon)`
  color: var(--color-darkgreen);
`
