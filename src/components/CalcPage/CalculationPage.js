import styled from 'styled-components/macro'
import ServiceCard from '../ServiceCard/ServiceCard'
import Header from '../Header/Header'
import MenuButton from '../MenuButton/MenuButton'
import Button from '../Button/Button'
import ResultField from '../ResultField/ResultField'
import NewService from '../FormComponents/NewService'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Searchbar from '../Searchbar/Searchbar'

export default function Calculation({
  services,
  setServices,
  onPlus,
  onMinus,
  finalCosts,
  onAddingNewCosts,
  onSafeResult,
  toggleSlideMenu,
  onDeleteEntry,
}) {
  const [openNewServiceForm, setOpenNewServiceForm] = useState('home')
  const [searchInput, setSearchInput] = useState('')

  return (
    <>
      <MenuButton toggleSlideMenu={toggleSlideMenu} />
      <Header title={'QuickQalc'} />
      <Content>
        <SearchbarWrapper>
          <Searchbar searchInput={searchInput} onTypeSearch={setSearchInput} />
        </SearchbarWrapper>
        <ServiceCardWrapper>
          {services
            .filter(character =>
              character.name.toLowerCase().includes(searchInput.toLowerCase())
            )
            .map(({ id, name, costs, notes, hours }, index) => (
              <ServiceCard
                key={id}
                index={index}
                name={name}
                costs={costs}
                notes={notes}
                hours={hours}
                onPlus={onPlus}
                onMinus={onMinus}
                services={services}
                onAddingNewCosts={onAddingNewCosts}
                onDeleteEntry={onDeleteEntry}
              />
            ))}
        </ServiceCardWrapper>
      </Content>

      <ButtonBox>
        <NewServiceButton
          data-testid="plusbutton"
          onClick={() => setOpenNewServiceForm('newService')}
        >
          New
        </NewServiceButton>
        <ResultField finalCosts={finalCosts} onSafeResult={onSafeResult} />
      </ButtonBox>

      {openNewServiceForm === 'newService' && (
        <NewService
          onAddNewService={addNewService}
          onOpenNewServiceForm={setOpenNewServiceForm}
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
    setOpenNewServiceForm('home')
  }
}

const Content = styled.div`
  display: grid;
  gap: 12px;
  grid-template-rows: 40px auto;
  padding: 10px;
  overflow-y: scroll;
`

const NewServiceButton = styled(Button)`
  width: 25%;
  border-radius: 0;
`

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 -20px 10px white;
`

const ServiceCardWrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-auto-rows: min-content;
  padding: 5px;
  overflow-y: scroll;
  width: 100%;
  scrollbar-width: none;
  &:last-child::after {
    content: '';
    height: 10px;
  }
`
const SearchbarWrapper = styled.div`
  padding: 5px;
`
