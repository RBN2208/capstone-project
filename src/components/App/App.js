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
  const [openNewServiceForm, setOpenNewServiceForm] = useState('home')
  const [finalCosts, setFinalCosts] = useState(0)
  const [toggleSlideMenu, setToggleSlideMenu] = useToggle(false)
  const [openSafeResult, setOpenSafeResult] = useState('')
  const [lastCalculations, setLastCalculation] = useLocalStorage(
    'lastCalculations',
    []
  )

  return (
    <>
      <Switch>
        <AppLayout openMenu={toggleSlideMenu}>
          <Route exact path="/">
            <CalculationPage
              services={services}
              onPlus={handlePlus}
              onMinus={handleMinus}
              finalCosts={finalCosts}
              onAddingNewCosts={updateCostsPerHours}
              onSafeResult={setOpenSafeResult}
              toggleSlideMenu={setToggleSlideMenu}
              onAddNewService={addNewService}
              openNewServiceForm={openNewServiceForm}
              onOpenNewServiceForm={setOpenNewServiceForm}
              onDeleteEntry={deleteEntry}
            />
          </Route>

          <Route path="/history">
            <History
              toggleSlideMenu={setToggleSlideMenu}
              lastCalculations={lastCalculations}
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

  function safeCostsToHistory({ date, costs }) {
    const newCalculation = {
      id: uuidv4(),
      date,
      costs,
    }
    setLastCalculation([...lastCalculations, newCalculation])
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

  function deleteEntry(index) {
    setServices([...services.slice(0, index), ...services.slice(index + 1)])
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
