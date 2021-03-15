import styled, { keyframes } from 'styled-components/macro'
import Icon from 'supercons'
import Button from '../Button/Button'

export default function SlideMenu({ menuIsOpen, setMenuIsOpen }) {
  return (
    <MenuBox position={menuIsOpen}>
      <p>Home</p>
      <p>History</p>
      <Icon glyph="view-close-small" onClick={() => setMenuIsOpen(false)} />
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
  background-color: cornflowerblue;
  width: 50vw;
  height: 100vh;
  padding: 20px;
  z-index: 1;
  animation-name: ${props => (props.position ? slideIn : slideOut)};
  animation-duration: 1s;
  animation-iteration-count: 1;
`
