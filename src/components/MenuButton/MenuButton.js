import Icon from 'supercons'
import styled from 'styled-components/macro'

export default function MenuButton({ openSlideMenu }) {
  return (
    <Container>
      <Icon glyph="menu" onClick={() => openSlideMenu(true)} />
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  right: 0.5em;
  top: 0.7em;
  scale: 155%;
`
