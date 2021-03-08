import { useState } from 'react'
import styled from 'styled-components'
import { serviceData as Data } from '../../serviceData.json'
import ServiceCard from '../ServiceCard/ServiceCard'

export default function App() {
  return (
    <>
      <AppContainer>
        {Data.map(data => (
          <ServiceCard name={data.name} costs={data.costs} />
        ))}
      </AppContainer>
    </>
  )
}

const AppContainer = styled.div`
  display: grid;
  gap: 10px;
  padding: 15px;
`
