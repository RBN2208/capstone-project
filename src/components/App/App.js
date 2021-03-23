import { useState } from 'react'
import styled from 'styled-components/macro'
import { Switch, Route } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import SlideMenu from '../SlideMenu/SlideMenu'
import History from '../HistoryPage/History'
import CalculationPage from '../CalcPage/CalculationPage'
import SafeResultForm from '../FormComponents/SafeResultForm'

import useToggle from '../../hooks/useToggle'
import useLocalStorage from '../../hooks/useLocalStorage'

export default function App() {
  const [services, setServices] = useLocalStorage('services', [])
  const [lastCalculations, setLastCalculations] = useLocalStorage(
    'lastCalculations',
    []
  )
  const [finalCosts, setFinalCosts] = useState(0)
  const [toggleSlideMenu, setToggleSlideMenu] = useToggle(false)
  const [openSafeResult, setOpenSafeResult] = useState('')

  return (
    <>
      <Switch>
        <AppLayout openMenu={toggleSlideMenu}>
          <Route exact path="/">
            <CalculationPage
              services={services}
              setServices={setServices}
              onPlus={handlePlus}
              onMinus={handleMinus}
              finalCosts={finalCosts}
              onAddingNewCosts={updateCostsPerHours}
              toggleSlideMenu={setToggleSlideMenu}
              onDeleteEntry={deleteCard}
              onSafeResult={setOpenSafeResult}
            />
          </Route>

          <Route path="/history">
            <History
              toggleSlideMenu={setToggleSlideMenu}
              lastCalculations={lastCalculations}
              onDeleteHistoryEntry={deleteHistoryEntry}
            />
          </Route>
        </AppLayout>
      </Switch>
      <SlideMenu
        toggleSlideMenu={toggleSlideMenu}
        onToggleSlideMenu={setToggleSlideMenu}
      />
      {openSafeResult === 'openSafeResult' && (
        <SafeResultForm
          finalCosts={finalCosts}
          onDiscardSave={setOpenSafeResult}
          onSafeCosts={safeCostsToHistory}
        />
      )}
    </>
  )

  function safeCostsToHistory({ date, costs, keynote }) {
    const newCalculation = {
      id: uuidv4(),
      date,
      costs,
      keynote,
    }
    setLastCalculations([...lastCalculations, newCalculation])
    setOpenSafeResult('home')
    resetValues()
  }

  function resetValues() {
    setServices(services.map(service => ({ ...service, hours: 0 })))
    setFinalCosts(0)
  }

  function updateCostsPerHours(
    index,
    newCostsPerHour,
    currentCostsPerHour,
    hours
  ) {
    const currentService = services[index]
    setServices([
      ...services.slice(0, index),
      { ...currentService, costs: newCostsPerHour },
      ...services.slice(index + 1),
    ])
    setFinalCosts(finalCosts - (currentCostsPerHour - newCostsPerHour) * hours)
  }

  function handlePlus(costs, hours, index) {
    setFinalCosts(finalCosts + costs)
    const currentService = services[index]
    setServices([
      ...services.slice(0, index),
      { ...currentService, hours: hours + 1 },
      ...services.slice(index + 1),
    ])
  }

  function handleMinus(costs, hours, index) {
    setFinalCosts(finalCosts - costs)
    const currentService = services[index]
    setServices([
      ...services.slice(0, index),
      { ...currentService, hours: hours - 1 },
      ...services.slice(index + 1),
    ])
  }

  function deleteCard(currentId) {
    setServices(services.filter(service => service.id !== currentId))
  }

  function deleteHistoryEntry(currentId) {
    setLastCalculations(
      lastCalculations.filter(entry => entry.id !== currentId)
    )
  }
}

const AppLayout = styled.div`
  display: grid;
  grid-template-rows: 50px auto 50px;
  height: 100vh;
  position: relative;
  margin-left: ${props => (props.openMenu ? '150px' : '0px')};
  transition: all 0.5s;
`
