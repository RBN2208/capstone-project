import styled from 'styled-components'
import Header from '../Header/Header'
import Icon from 'supercons'

export default function History({ setMenuIsOpen }) {
  return (
    <>
      <MenuButton>
        <Icon glyph="menu" onClick={() => setMenuIsOpen(true)} />
      </MenuButton>
      <Header title="Historypage" />
    </>
  )
}

const MenuButton = styled.div`
  position: absolute;
  right: 0.5em;
  top: 0.7em;
  scale: 180%;
`
