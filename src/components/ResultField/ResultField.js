import styled from 'styled-components/macro'
import Icon from 'supercons'

export default function ResultField({ finalCosts, onSafeResult }) {
  return (
    <Resultbox>
      <span>Endpreis: {finalCosts} €</span>
      <Checkmark
        glyph="checkmark"
        width={'20'}
        height={'20'}
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
  scale: 250%;
  color: var(--color-darkgreen);
`
