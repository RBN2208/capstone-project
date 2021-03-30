import styled from 'styled-components/macro'
import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { deleteEntry } from '../../services/deleteEntry'
import useToggle from '../../hooks/useToggle'
import useLocalStorage from '../../hooks/useLocalStorage'
import {
  add,
  subtract,
  updatePlusTime,
  updateMinusTime,
  updateTimeValue,
} from '../../services/math'

import Landingpage from '../Landingpage/Landingpage'
import CalculationPage from '../CalcPage/CalculationPage'
import HistoryPage from '../HistoryPage/HistoryPage'
import SlideMenu from '../SlideMenu/SlideMenu'
import SaveResultForm from '../FormComponents/SaveResultForm'

export default function App() {
  const [services, setServices] = useLocalStorage('services', [
    {
      id: '1',
      name: 'Bohren',
      costs: 24,
      notes: 'Helfertätigkeit',
      hours: 0,
    },
    {
      id: '2',
      name: 'Laminat verlegen',
      costs: 38,
      notes: 'Lange Bahnen, benötigt 2 Personen',
      hours: 0,
    },
    {
      id: '3',
      name: 'Verspachteln',
      costs: 64,
      notes: 'ca. 3m2 pro Stunde',
      hours: 0,
    },
  ])

  const [lastCalculations, setLastCalculations] = useLocalStorage(
    'lastCalculations',
    []
  )

  const [finalCosts, setFinalCosts] = useState(0)
  const [slideMenu, toggleSlideMenu, closeSlideMenu] = useToggle(false)
  const [openSaveResult, setOpenSaveResult] = useState('')

  const [loadingLandingPage, setIsLoadingLandingPage] = useState(false)
  window.setTimeout(() => {
    setIsLoadingLandingPage(true)
  }, 2000)

  window.onload = resetOnLoad

  return (
    <>
      <Switch>
        <AppLayout openMenu={slideMenu}>
          <Landingpage loadingPage={loadingLandingPage} />
          <Route exact path="/">
            <CalculationPage
              services={services}
              setServices={setServices}
              finalCosts={finalCosts}
              onPlus={handlePlus}
              onMinus={handleMinus}
              onAddingNewCosts={updateCostsPerHours}
              onSaveResult={setOpenSaveResult}
              onDeleteEntry={deleteServiceEntry}
              closeSlideMenu={closeSlideMenu}
              toggleSlideMenu={toggleSlideMenu}
            />
          </Route>

          <Route path="/history">
            <HistoryPage
              closeSlideMenu={closeSlideMenu}
              toggleSlideMenu={toggleSlideMenu}
              lastCalculations={lastCalculations}
              onDeleteHistoryEntry={deleteHistoryEntry}
            />
          </Route>
        </AppLayout>
      </Switch>
      <SlideMenu slideMenuState={slideMenu} toggleSlideMenu={toggleSlideMenu} />
      {openSaveResult === 'openSaveResult' && (
        <SaveResultForm
          finalCosts={finalCosts}
          onDiscardSave={setOpenSaveResult}
          onSave={saveToHistory}
        />
      )}
    </>
  )

  function saveToHistory({ date, costs, keynote, urls }) {
    const usedServices = services.filter(service => service.hours > 0)
    const newCalculation = {
      id: uuidv4(),
      date,
      costs,
      keynote,
      urls,
      usedServices,
    }
    setLastCalculations([...lastCalculations, newCalculation])
    setOpenSaveResult('')
    resetValuesOnSave()
  }

  function resetValuesOnSave() {
    setServices(services.map(service => ({ ...service, hours: 0 })))
    setFinalCosts(0)
  }

  function resetOnLoad() {
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
    subtract(setFinalCosts, finalCosts, costs)
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
  margin-left: ${props => (props.openMenu ? '165px' : '0px')};
  transition: all 0.5s;
`
