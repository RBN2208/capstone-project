import styled from 'styled-components/macro'
import Icon from 'supercons'

export default function MenuButton({ toggleSlideMenu }) {
  return (
    <Container>
      <Icon
        arial-label="button for slide menu"
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
  &:focus {
    border: 1px dotted black;
  }
`
