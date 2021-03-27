import styled from 'styled-components/macro'
import Icon from 'supercons'

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
