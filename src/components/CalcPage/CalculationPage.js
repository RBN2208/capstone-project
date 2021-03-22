import styled from 'styled-components/macro'
import ServiceCard from '../ServiceCard/ServiceCard'
import Header from '../Header/Header'
import MenuButton from '../MenuButton/MenuButton'
import Button from '../Button/Button'
import ResultField from '../ResultField/ResultField'
import NewService from '../FormComponents/NewService'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function Calculation({
  services,
  setServices,
  onPlus,
  onMinus,
  finalCosts,
  onAddingNewCosts,
  onSafeResult,
  toggleSlideMenu,
  onOpenNewServiceForm,
  onDeleteEntry,
}) {
  const [openNewServiceForm, setOpenNewServiceForm] = useState('home')

  return (
    <>
      <MenuButton toggleSlideMenu={toggleSlideMenu} />
      <Header title={'QuickQalc'}></Header>
      <Content>
        {services.map(({ id, name, costs, hours }) => (
          <ServiceCard
            key={id}
            id={id}
            name={name}
            costs={costs}
            hours={hours}
            onPlus={onPlus}
            onMinus={onMinus}
            services={services}
            onAddingNewCosts={onAddingNewCosts}
            onDeleteEntry={onDeleteEntry}
          />
        ))}
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
  function addNewService({ name, costs }) {
    const newService = {
      id: uuidv4(),
      name,
      costs,
      hours: 0,
    }
    setServices([...services, newService])
    setOpenNewServiceForm('home')
  }
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

const NewServiceButton = styled(Button)`
  width: 25%;
  border-radius: 0;
`

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`
