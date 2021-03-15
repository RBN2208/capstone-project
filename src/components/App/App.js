import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import loadFromLocal from '../../lib/loadFromLocal'
import saveToLocal from '../../lib/saveToLocal'
import ServiceCard from '../ServiceCard/ServiceCard'
import Result from '../Result/Result'
import Button from '../Button/Button'
import NewService from '../FormComponents/NewService'
import Header from '../Header/Header'
import SlideMenu from '../SlideMenu/SlideMenu'

export default function App() {
  const [services, setServices] = useState(loadFromLocal('services') ?? [])
  const [sum, setSum] = useState(0)
  const [openServiceFrom, setOpenServiceFrom] = useState('home')
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  useEffect(() => {
    saveToLocal('services', services)
  }, [services])

  return (
    <>
      <SlideMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <AppLayout>
        <MenuButton
          bgColor={{ name: 'grey' }}
          onClick={() => setMenuIsOpen(true)}
        >
          Open
        </MenuButton>
        <Header title={'QuickQalc'}></Header>
        <Content>
          {services.map(({ name, costs, id }) => (
            <ServiceCard
              key={id}
              name={name}
              costs={costs}
              onPlus={handlePlus}
              onMinus={handleMinus}
              services={services}
              onAddingNewCosts={updateCosts}
              adjustCurrentCosts={adjustCurrentCosts}
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
      </AppLayout>
    </>
  )

  function updateCosts(index, currentCosts) {
    const currentService = services[index]
    setServices([
      ...services.slice(0, index),
      { ...currentService, costs: currentCosts },
      ...services.slice(index + 1),
    ])
  }

  function adjustCurrentCosts({ newCosts, counter, currentCosts }) {
    setSum(sum - (currentCosts - newCosts) * counter)
  }

  function onAddNewService({ name, costs }) {
    const newService = {
      id: uuidv4(),
      name,
      costs,
    }
    setServices([...services, newService])
    setOpenServiceFrom('home')
  }

  function handlePlus(costs) {
    setSum(sum + costs)
  }

  function handleMinus(costs) {
    setSum(sum - costs)
  }
}

const AppLayout = styled.div`
  display: grid;
  grid-template-rows: 50px auto 50px;
  gap: 10px;
  height: 100vh;
  position: relative;
  filter: ${props => props.blur};
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

const Content = styled.div`
  display: grid;
  gap: 10px;
  grid-auto-rows: min-content;
  padding: 15px;

  margin: 0 auto;
  overflow-y: scroll;
  width: 100%;
`
const Delete = styled.button`
  height: 50px;
`

const MenuButton = styled(Button)`
  position: absolute;
  right: 5px;
`
