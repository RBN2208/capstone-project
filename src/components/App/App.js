import { useState } from 'react'
import styled from 'styled-components/macro'
import { Switch, Route } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import SlideMenu from '../SlideMenu/SlideMenu'
import History from '../HistoryPage/History'
import CalculationPage from '../CalcPage/CalculationPage'
import SafeResultForm from '../FormComponents/SafeResultForm'
import Uploader from '../Uploader/Uploader'

import useToggle from '../../hooks/useToggle'
import useLocalStorage from '../../hooks/useLocalStorage'
import { deleteEntry } from '../../services/deleteEntry'
import {
  add,
  substrate,
  updatePlusTime,
  updateMinusTime,
  updateTimeValue,
} from '../../services/math'

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
              onDeleteEntry={deleteServiceEntry}
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
          <Route path="/uploader">
            <Uploader />
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
    updateTimeValue(services, setServices, index, newCostsPerHour)
    setFinalCosts(finalCosts - (currentCostsPerHour - newCostsPerHour) * hours)
  }

  function handlePlus(costs, hours, index) {
    add(setFinalCosts, finalCosts, costs)
    updatePlusTime(services, setServices, hours, index)
  }

  function handleMinus(costs, hours, index) {
    substrate(setFinalCosts, finalCosts, costs)
    updateMinusTime(services, setServices, hours, index)
  }

  function deleteServiceEntry(currentId) {
    deleteEntry(services, setServices, currentId)
  }

  function deleteHistoryEntry(currentId) {
    deleteEntry(lastCalculations, setLastCalculations, currentId)
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
