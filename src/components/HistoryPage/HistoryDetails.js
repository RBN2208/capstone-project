import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import DetailedServices from './DetailedServices'

export default function HistoryDetails({ toggleDetails, usedServices }) {
  return (
    <>
      <Wrapper>
        {usedServices.map(({ name, hours, costs }) => (
          <DetailedServices
            key={uuidv4()}
            id={uuidv4()}
            name={name}
            hours={hours}
            costs={costs}
          />
        ))}
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  display: grid;
  justify-items: flex-start;
  width: 100%;
  padding: 10px;
  background: white;
  box-shadow: 0 0 10px var(--color-dark);
  border-radius: 5px;
  color: var(--color-dark);
`
