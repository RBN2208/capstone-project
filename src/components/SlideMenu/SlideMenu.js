import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function SlideMenu({ slideMenuState, toggleSlideMenu }) {
  return (
    <MenuBox position={slideMenuState}>
      <Nav data-testid="slidenavigation">
        <NavLinkStyled to="/" onClick={toggleSlideMenu}>
          Kalkulation
        </NavLinkStyled>
        <NavLinkStyled to="/history" onClick={toggleSlideMenu}>
          Historie
        </NavLinkStyled>
      </Nav>
    </MenuBox>
  )
}
SlideMenu.propTypes = {
  slideMenuState: PropTypes.bool.isRequired,
  toggleSlideMenu: PropTypes.func.isRequired,
}

const MenuBox = styled.div`
  position: fixed;
  top: 0;
  left: ${props => (props.position ? '0' : '-165px')};
  background-color: var(--color-dark);
  color: var(--color-light);
  width: 165px;
  height: 100vh;
  font-size: 1.5rem;
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
  color: var(--color-light);
  &:visited {
    color: var(--color-light);
  }
`
