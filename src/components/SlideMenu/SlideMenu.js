import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function SlideMenu({ isSlideMenuOpen, setIsSlideMenuOpen }) {
  return (
    <MenuBox position={isSlideMenuOpen}>
      <Nav>
        <NavLinkStyled to="/" onClick={() => setIsSlideMenuOpen(false)}>
          Home
        </NavLinkStyled>
        <NavLinkStyled to="/history" onClick={() => setIsSlideMenuOpen(false)}>
          History
        </NavLinkStyled>
        <Delete onClick={() => localStorage.clear()}>clear</Delete>
      </Nav>
    </MenuBox>
  )
}

const MenuBox = styled.div`
  position: fixed;
  left: ${props => (props.position ? '0' : '-150px')};
  background-color: var(--color-dark);
  color: var(--color-light);
  width: 150px;
  height: 100vh;
  padding: 50px 20px;
  z-index: 1;
  transition: all 0.5s;
`
const Nav = styled.nav`
  display: grid;
  gap: 30px;
  text-decoration: none;
`
const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  &:visited {
    color: var(--color-light);
  }
`
const Delete = styled.button`
  height: 50px;
`
