import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import ListOfUsedServics from './ListOfUsedServics'

export default function HistoryDetails({ usedServices }) {
  return (
    <>
      <Wrapper data-testid="used-services">
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

HistoryDetails.propTypes = {
  usedServices: PropTypes.array,
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
