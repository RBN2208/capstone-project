import styled from 'styled-components/macro'

import ListOfUsedServics from './ListOfUsedServics'

export default function HistoryDetails({ usedServices }) {
  return (
    <>
      <Wrapper>
        {usedServices.map(({ name, hours, costs }, index) => (
          <ListOfUsedServics
            key={index}
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
  box-shadow: 0 0 10px var(--color-dark);
  border-radius: 5px;
  color: var(--color-dark);
  background: white;
`
