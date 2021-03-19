import styled from 'styled-components/macro'
import ServiceCard from '../ServiceCard/ServiceCard'
import Header from '../Header/Header'
import MenuButton from '../MenuButton/MenuButton'
import Button from '../Button/Button'
import ResultField from '../Result/ResultField'
import NewService from '../FormComponents/NewService'

export default function Calculation({
  services,
  setServices,
  onPlus,
  onMinus,
  finalCosts,
  onAddingNewCosts,
  onSafeResult,
  toggleSlideMenu,
  onAddNewService,
  openNewServiceForm,
  onOpenNewServiceForm,
}) {
  return (
    <>
      <MenuButton toggleSlideMenu={toggleSlideMenu} />
      <Header title={'QuickQalc'}></Header>
      <Content>
        {services.map(({ id, name, costs, hours }) => (
          <ServiceCard
            key={id}
            name={name}
            costs={costs}
            hours={hours}
            onPlus={onPlus}
            onMinus={onMinus}
            services={services}
            onAddingNewCosts={onAddingNewCosts}
          />
        ))}
      </Content>

      <ButtonBox>
        <NewServiceButton onClick={() => onOpenNewServiceForm('newService')}>
          New
        </NewServiceButton>
        <ResultField finalCosts={finalCosts} onSafeResult={onSafeResult} />
      </ButtonBox>

      {openNewServiceForm === 'newService' && (
        <NewService
          onAddNewService={onAddNewService}
          onOpenNewServiceForm={onOpenNewServiceForm}
        />
      )}
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

const NewServiceButton = styled(Button)`
  width: 25%;
  border-radius: 0;
`

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`
