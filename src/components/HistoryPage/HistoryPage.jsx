import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import MenuButton from '../MenuButton/MenuButton'
import HistoryEntry from './HistoryEntry'

export default function HistoryPage({
  closeSlideMenu,
  toggleSlideMenu,
  lastCalculations,
  onDeleteHistoryEntry,
}) {
  return (
    <>
      <MenuButton toggleSlideMenu={toggleSlideMenu} />
      <Header title="Letzte Kalkulationen" />
      <Content onClick={() => closeSlideMenu()}>
        {lastCalculations.map(
          ({ id, date, costs, keynote, urls, usedServices }) => (
            <HistoryEntry
              key={id}
              id={id}
              date={date}
              costs={costs}
              keynote={keynote}
              urls={urls}
              usedServices={usedServices}
              onDeleteHistoryEntry={onDeleteHistoryEntry}
            />
          )
        )}
      </Content>
    </>
  )
}

HistoryPage.propTypes = {
  closeSlideMenu: PropTypes.func,
  toggleSlideMenu: PropTypes.func,
  lastCalculations: PropTypes.array,
  onDeleteHistoryEntry: PropTypes.func,
}

const Content = styled.main`
  display: grid;
  gap: 10px;
  grid-auto-rows: min-content;
  scrollbar-width: none;
  padding: 15px;
  margin: 0 auto;
  overflow-y: scroll;
  width: 100%;
  height: 108%;
`
