import styled from 'styled-components/macro'

export default function Searchbar({ searchInput, onTypeSearch }) {
  return (
    <SearchInput
      placeholder="Dienstleistungen..."
      value={searchInput}
      onChange={event => onTypeSearch(event.target.value)}
    />
  )
}

const SearchInput = styled.input`
  padding: 20px 10px;
  border: 1px solid var(--color-midgrey);
`
