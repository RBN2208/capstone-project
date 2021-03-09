import { v4 as uuidv4 } from 'uuid'
import { serviceData } from '../../serviceData.json'
import styled from 'styled-components/macro'
import ServiceCard from '../ServiceCard/ServiceCard'
import Result from '../Result/Result'
import { useState } from 'react'

export default function App() {
  const [results, setResults] = useState()

  return (
    <AppLayout>
      {serviceData.map(({ name, costs }) => (
        <ServiceCard
          key={uuidv4()}
          name={name}
          costs={costs}
          onPlus={handlePlus}
        />
      ))}
      <Result resultValue={results} />
    </AppLayout>
  )

  function handlePlus(costs) {
    console.log(costs)
  }
}

const AppLayout = styled.div`
  display: grid;
  gap: 10px;
  padding: 15px;
`

/* 
function handleMinus(index) {
  const currentValue = result[index]
  setResult([
    ...result.slice(0, index),
    { ...currentValue, score: currentValue.score - 1 },
    ...result.slice(index + 1),
  ])
}



const currentValue = results.push(costs)
    setResults([
      ...results.slice(0, costs),
      { ...currentValue, score: currentValue.score + 1 },
      ...results.slice(costs + 1),
    ])
*/
