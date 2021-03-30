import styled from 'styled-components/macro'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Icon from 'supercons'
import PropTypes from 'prop-types'

import ServiceCard from '../ServiceCard/ServiceCard'
import Header from '../Header/Header'
import MenuButton from '../MenuButton/MenuButton'
import Button from '../Button/Button'
import Endresult from '../Endresult/Endresult'
import NewService from '../FormComponents/NewService'
import Searchbar from '../Searchbar/Searchbar'

export default function Calculation({
  services,
  setServices,
  finalCosts,
  onPlus,
  onMinus,
  onAddingNewCosts,
  onSaveResult,
  onDeleteEntry,
  closeSlideMenu,
  toggleSlideMenu,
}) {
  const [openNewServiceForm, setOpenNewServiceForm] = useState('')
  const [searchInput, setSearchInput] = useState('')

  return (
    <>
      <MenuButton toggleSlideMenu={toggleSlideMenu} />
      <Header title={'calcuFix'} />
      <Content onClick={() => closeSlideMenu()}>
        <SearchbarWrapper>
          <Searchbar searchInput={searchInput} onTypeSearch={setSearchInput} />
        </SearchbarWrapper>
        <ServiceCardWrapper>
          {services
            .filter(service =>
              service.name.toLowerCase().includes(searchInput.toLowerCase())
            )
            .map(({ id, name, costs, hours, notes }, index) => (
              <ServiceCard
                key={id}
                id={id}
                index={index}
                name={name}
                costs={costs}
                hours={hours}
                notes={notes}
                onPlus={onPlus}
                onMinus={onMinus}
                onAddingNewCosts={onAddingNewCosts}
                onDeleteEntry={onDeleteEntry}
              />
            ))}
        </ServiceCardWrapper>
      </Content>

      <ButtonBox>
        <NewServiceButton
          aria-label="add a new service"
          data-testid="new-service"
          onClick={() => setOpenNewServiceForm('newService')}
        >
          <Icon glyph="plus" width={'40'} height={'40'} viewBox="2 2 28 28" />
        </NewServiceButton>
        <Endresult finalCosts={finalCosts} onSaveResult={onSaveResult} />
      </ButtonBox>

      {openNewServiceForm === 'newService' && (
        <NewService
          onAddNewService={addNewService}
          onAbort={setOpenNewServiceForm}
        />
      )}
    </>
  )
  function addNewService({ name, costs, notes }) {
    const newService = {
      id: uuidv4(),
      name,
      costs,
      notes,
      hours: 0,
    }
    setServices([newService, ...services])
    setOpenNewServiceForm('')
  }
}

Calculation.propTypes = {
  services: PropTypes.array.isRequired,
  setServices: PropTypes.func.isRequired,
  finalCosts: PropTypes.number,
  onPlus: PropTypes.func,
  onMinus: PropTypes.func,
  onAddingNewCosts: PropTypes.func,
  onSaveResult: PropTypes.func,
  onDeleteEntry: PropTypes.func,
  closeSlideMenu: PropTypes.func,
  toggleSlideMenu: PropTypes.func,
}

const Content = styled.main`
  display: grid;
  gap: 12px;
  grid-template-rows: 40px auto;
  padding: 10px;
  overflow-y: scroll;
`

const NewServiceButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 50px;
  border-radius: 0;
`

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 -20px 10px white;
`

const ServiceCardWrapper = styled.section`
  display: grid;
  gap: 10px;
  grid-auto-rows: min-content;
  padding: 5px;
  overflow-y: scroll;
  width: 100%;
  &:last-child::after {
    content: '';
    height: 10px;
  }
`
const SearchbarWrapper = styled.div`
  padding: 5px;
`
