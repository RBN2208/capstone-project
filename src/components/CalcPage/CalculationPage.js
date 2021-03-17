import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import ServiceCard from '../ServiceCard/ServiceCard'
import Header from '../Header/Header'
import MenuButton from '../MenuButton/MenuButton'
import Button from '../Button/Button'
import Result from '../Result/Result'
import NewService from '../FormComponents/NewService'
import { useState } from 'react'

export default function Calculation({
  services,
  setServices,
  onPlus,
  onMinus,
  onAddingNewCosts,
  setIsSlideMenuOpen,
  finalCosts,
  setOpenSafeResult,
}) {
  const [createNewService, setCreateNewService] = useState('home')

  return (
    <>
      <MenuButton openSlideMenu={setIsSlideMenuOpen} />
      <Header title={'QuickQalc'}></Header>
      <Content>
        {services.map(({ name, costs, id }) => (
          <ServiceCard
            key={id}
            name={name}
            costs={costs}
            onPlus={onPlus}
            onMinus={onMinus}
            services={services}
            onAddingNewCosts={onAddingNewCosts}
          />
        ))}
      </Content>

      <ButtonBox>
        <ButtonNewService onClick={() => setCreateNewService('newService')}>
          New
        </ButtonNewService>
        <Result
          resultValue={finalCosts}
          setOpenSafeResult={setOpenSafeResult}
        />
      </ButtonBox>

      {createNewService === 'newService' && (
        <NewService onSubmit={onAddNewService} />
      )}
    </>
  )
  function onAddNewService({ name, costs }) {
    const newService = {
      id: uuidv4(),
      name,
      costs,
    }
    setServices([...services, newService])
    setCreateNewService('home')
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

const ButtonNewService = styled(Button)`
  width: 25%;
  border-radius: 0;
`

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`
