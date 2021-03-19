import Icon from 'supercons'
import styled from 'styled-components/macro'

export default function MenuButton({ toggleSlideMenu }) {
  return (
    <Container>
      <Icon
        role="button"
        glyph="menu"
        viewBox="8 7 16 16"
        onClick={toggleSlideMenu}
      />
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  right: 0.5em;
  top: 0.6em;
`
