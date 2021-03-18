import styled from 'styled-components'
import Header from '../Header/Header'
import MenuButton from '../MenuButton/MenuButton'
import HistoryEntry from './HistoryEntry'

export default function History({ setToggleSlideMenu, lastCalculations }) {
  return (
    <>
      <MenuButton setToggleSlideMenu={setToggleSlideMenu} />
      <Header title="Historypage" />
      <Content>
        {lastCalculations.map(({ id, date, costs }) => (
          <HistoryEntry key={id} date={date} costs={costs} />
        ))}
      </Content>
    </>
  )
}

const Content = styled.div`
  display: grid;
  gap: 10px;
  grid-auto-rows: min-content;
  padding: 15px;
  margin: 0 auto;
  overflow-y: scroll;
  width: 100%;
`
