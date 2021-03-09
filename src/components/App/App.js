// import { v4 as uuidv4 } from 'uuid'
import { serviceData } from '../../serviceData.json'
import styled from 'styled-components/macro'
import ServiceCard from '../ServiceCard/ServiceCard'
import Result from '../Result/Result'
import { useState } from 'react'

export default function App() {
  const [sum, setSum] = useState(0)

  return (
    <AppLayout>
      {serviceData.map(({ name, costs, id }, index) => (
        <ServiceCard
          key={id}
          name={name}
          costs={costs}
          onPlus={handlePlus}
          onMinus={handleMinus}
        />
      ))}
      <Result resultValue={sum} />
    </AppLayout>
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
  gap: 10px;
  padding: 15px;
`
