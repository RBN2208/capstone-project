import styled from 'styled-components/macro'

export default function ListOfUsedServics({ name, hours, costs }) {
  return (
    <>
      <EntryWrapper>
        <span>{name}</span>{' '}
        <DetailsInfoBox>
          <span>{hours}/h</span>
          <span>{costs}€</span>
        </DetailsInfoBox>
      </EntryWrapper>
    </>
  )
}
const EntryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border-bottom: 1px groove var(--color-light);
  &:last-child {
    border-bottom: none;
  }
`

const DetailsInfoBox = styled.span`
  width: 90px;
  display: flex;
  justify-content: space-between;
`
