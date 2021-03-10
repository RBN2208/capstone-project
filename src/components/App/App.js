// import { v4 as uuidv4 } from 'uuid'
import { serviceData } from '../../serviceData.json'
import styled from 'styled-components/macro'
import ServiceCard from '../ServiceCard/ServiceCard'
import Result from '../Result/Result'
import { useState } from 'react'
import Button from '../Button/Button'
import NewService from '../FormComponents/NewService'

export default function App() {
  const [sum, setSum] = useState(0)
  const [costInput, setCostInput] = useState(50)
  const [newService, setNewService] = useState('')

  return (
    <>
      <AppLayout>
        <Content>
          {serviceData.map(({ name, costs, id }, index) => (
            <ServiceCard
              key={id}
              name={name}
              costs={costs || Number(costInput)}
              onPlus={handlePlus}
              onMinus={handleMinus}
              costInput={costInput}
              setCostInput={setCostInput}
            />
          ))}
        </Content>
        {newService === 'newService' && (
          <NewService setNewService={setNewService} />
        )}
        <ButtonBox>
          <ButtonNew
            onClick={() => setNewService('newService')}
            bgColor={{ name: 'white' }}
          >
            New
          </ButtonNew>
          <Result resultValue={sum} />
        </ButtonBox>
      </AppLayout>
    </>
  )

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
`

const ButtonNew = styled(Button)`
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
