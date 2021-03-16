import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { Switch, Route } from 'react-router-dom'

import loadFromLocal from '../../lib/loadFromLocal'
import saveToLocal from '../../lib/saveToLocal'

import SlideMenu from '../SlideMenu/SlideMenu'
import History from '../HistoryPage/History'
import CalculationPage from '../CalcPage/CalculationPage'

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
      <Switch>
        <AppLayout openMenu={menuIsOpen}>
          <Route exact path="/">
            <CalculationPage
              sum={sum}
              services={services}
              openServiceFrom={openServiceFrom}
              setOpenServiceFrom={setOpenServiceFrom}
              setMenuIsOpen={setMenuIsOpen}
              onPlus={handlePlus}
              onMinus={handleMinus}
              onAddingNewCosts={updateCosts}
              onAddNewService={onAddNewService}
            />
          </Route>

          <Route path="/history">
            <History setMenuIsOpen={setMenuIsOpen} />
          </Route>
        </AppLayout>
      </Switch>
    </>
  )

  function updateCosts(index, newCosts, currentCosts, counter) {
    const currentService = services[index]
    setServices([
      ...services.slice(0, index),
      { ...currentService, costs: currentCosts },
      ...services.slice(index + 1),
    ])
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
  margin-left: ${props => (props.openMenu ? '150px' : '0px')};
  transition: all 0.5s;
`
