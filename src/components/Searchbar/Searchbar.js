import styled from 'styled-components/macro'

export default function Searchbar({ searchInput, setSearchInput }) {
  return (
    <SearchInput
      placeholder="Dienstleistungen..."
      value={searchInput}
      onChange={event => setSearchInput(event.target.value)}
    />
  )
}

const SearchInput = styled.input`
  padding: 20px 10px;
  border: 1px solid var(--color-midgrey);
`
