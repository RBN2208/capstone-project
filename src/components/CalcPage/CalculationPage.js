import styled from 'styled-components'
import ServiceCard from '../ServiceCard/ServiceCard'
import Header from '../Header/Header'
import Icon from 'supercons'
import Button from '../Button/Button'
import Result from '../Result/Result'
import NewService from '../FormComponents/NewService'

export default function Calculation({
  services,
  onPlus,
  onMinus,
  onAddingNewCosts,
  setMenuIsOpen,
  openServiceFrom,
  setOpenServiceFrom,
  onAddNewService,
  sum,
}) {
  return (
    <>
      <MenuButton>
        <Icon glyph="menu" onClick={() => setMenuIsOpen(true)} />
      </MenuButton>
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
        <ButtonNewService
          onClick={() => setOpenServiceFrom('newService')}
          bgColor={{ name: 'white' }}
        >
          New
        </ButtonNewService>
        <Result resultValue={sum} />
        <Delete onClick={() => localStorage.clear()}>clear</Delete>
      </ButtonBox>

      {openServiceFrom === 'newService' && (
        <NewService onSubmit={onAddNewService} />
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

const ButtonNewService = styled(Button)`
  width: 100px;
  color: black;
  border: 1px solid darkgray;
`

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const Delete = styled.button`
  height: 50px;
`

const MenuButton = styled.div`
  position: absolute;
  right: 0.5em;
  top: 0.7em;
  scale: 180%;
`
