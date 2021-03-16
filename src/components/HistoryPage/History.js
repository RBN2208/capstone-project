import styled from 'styled-components'
import Header from '../Header/Header'
import MenuButton from '../MenuButton/MenuButton'

export default function History({ setIsSlideMenuOpen }) {
  return (
    <>
      <MenuButton openSlideMenu={setIsSlideMenuOpen} />
      <Header title="Historypage" />
    </>
  )
}
