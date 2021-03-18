import Icon from 'supercons'
import styled from 'styled-components/macro'

export default function MenuButton({ setToggleSlideMenu }) {
  return (
    <Container>
      <Icon role="button" glyph="menu" onClick={setToggleSlideMenu} />
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  right: 0.5em;
  top: 0.7em;
  scale: 155%;
`
