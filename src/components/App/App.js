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
  const [finalCosts, setFinalCosts] = useState(0)
  const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false)

  useEffect(() => {
    saveToLocal('services', services)
  }, [services])

  return (
    <>
      <SlideMenu
        isSlideMenuOpen={isSlideMenuOpen}
        setIsSlideMenuOpen={setIsSlideMenuOpen}
      />
      <Switch>
        <AppLayout openMenu={isSlideMenuOpen}>
          <Route exact path="/">
            <CalculationPage
              finalCosts={finalCosts}
              services={services}
              setServices={setServices}
              setIsSlideMenuOpen={setIsSlideMenuOpen}
              onPlus={handlePlus}
              onMinus={handleMinus}
              onAddingNewCosts={updateCosts}
            />
          </Route>

          <Route path="/history">
            <History setIsSlideMenuOpen={setIsSlideMenuOpen} />
          </Route>
        </AppLayout>
      </Switch>
    </>
  )

  function updateCosts(index, newCostsPerHour, currentCostsPerHour, hours) {
    const currentService = services[index]
    setServices([
      ...services.slice(0, index),
      { ...currentService, costs: newCostsPerHour },
      ...services.slice(index + 1),
    ])
    setFinalCosts(finalCosts - (currentCostsPerHour - newCostsPerHour) * hours)
  }

  function handlePlus(costs) {
    setFinalCosts(finalCosts + costs)
  }

  function handleMinus(costs) {
    setFinalCosts(finalCosts - costs)
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
