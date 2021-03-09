import { v4 as uuidv4 } from 'uuid'
import { serviceData } from '../../serviceData.json'
import styled from 'styled-components/macro'
import ServiceCard from '../ServiceCard/ServiceCard'
import Result from '../Result/Result'
import { useState } from 'react'
import add from '../../services/Add'

export default function App() {
  const [sum, setSum] = useState(0)

  return (
    <AppLayout>
      {serviceData.map(({ name, costs }, index) => (
        <ServiceCard
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

/* 

function handlePlus(index) {
    const currentPlayer = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ])
  }

      results.reduce((accumulator, costs) => {
      return accumulator + costs
    }, 0)


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
