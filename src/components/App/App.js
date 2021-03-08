import styled from 'styled-components/macro'
import { serviceData } from '../../serviceData.json'
import ServiceCard from '../ServiceCard/ServiceCard'

export default function App() {
  return (
    <>
      <AppLayout>
        {serviceData.map(data => (
          <ServiceCard name={data.name} costs={data.costs} />
        ))}
      </AppLayout>
    </>
  )
}

const AppLayout = styled.div`
  display: grid;
  gap: 10px;
  padding: 15px;
`
