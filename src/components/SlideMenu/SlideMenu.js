import styled, { keyframes } from 'styled-components/macro'
import Icon from 'supercons'

export default function SlideMenu({ menuIsOpen, setMenuIsOpen }) {
  return (
    <MenuBox position={menuIsOpen}>
      <Nav>
        <span>Home</span>
        <span>History</span>
      </Nav>
      <IconBox>
        <Icon glyph="view-close-small" onClick={() => setMenuIsOpen(false)} />
      </IconBox>
    </MenuBox>
  )
}

const slideIn = keyframes`
    0% {left: -100vw;}
    100% {left: 0vw;}
`

const slideOut = keyframes`
    0% {left: 0vw;}
    100% {left: -100vw;}
`

const MenuBox = styled.div`
  position: fixed;
  left: ${props => (props.position ? '0' : '-100vw')};
  display: ${props => (props.position ? 'inline' : 'none')};
  background-color: gainsboro;
  width: 50vw;
  height: 100vh;
  padding: 50px 20px;
  z-index: 1;
  animation-name: ${props => (props.position ? slideIn : slideOut)};
  animation-duration: 1s;
  animation-iteration-count: 1;
`
const Nav = styled.nav`
  display: grid;
  gap: 30px;
`
const IconBox = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`
