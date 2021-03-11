import { v4 as uuidv4 } from 'uuid'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components/macro'
import loadLocal from '../../lib/loadLocal'
import saveLocal from '../../lib/saveLocal'
import ServiceCard from '../ServiceCard/ServiceCard'
import Result from '../Result/Result'
import Button from '../Button/Button'
import NewService from '../FormComponents/NewService'

export default function App() {
  const [services, setServices] = useState(loadLocal('services') ?? [])
  const [sum, setSum] = useState(0)
  const [openServiceFrom, setOpenServiceFrom] = useState('home')
  const [actualCosts, setActualCosts] = useState(50)

  useEffect(() => {
    saveLocal('services', services)
  }, [services])

  return (
    <>
      <AppLayout>
        <Content>
          {services.map(({ name, costs, id }) => (
            <ServiceCard
              key={id}
              name={name}
              costs={costs}
              onPlus={handlePlus}
              onMinus={handleMinus}
              actualCosts={costs}
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
          <Delete onClick={() => localStorage.removeItem('services')}>
            clear
          </Delete>
        </ButtonBox>
        {openServiceFrom === 'newService' && (
          <NewService
            onSubmit={addNewService}
            onAddNewService={setOpenServiceFrom}
            actualCosts={actualCosts}
          />
        )}
      </AppLayout>
    </>
  )

  function addNewService({ name, costs }) {
    const newService = {
      id: uuidv4(),
      name,
      costs,
    }
    setServices([newService, ...services])
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
  grid-template-rows: auto 50px;
  gap: 10px;
  padding: 15px;
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
  margin: 0 auto;
  overflow-y: scroll;
  width: 100%;
`
const Delete = styled.button`
  height: 50px;
`
