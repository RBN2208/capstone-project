import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Searchbar({ searchInput, onTypeSearch }) {
  return (
    <SearchInput
      role="input"
      data-testid="searchbar"
      aria-label="searchbar"
      placeholder="Dienstleistungen..."
      value={searchInput}
      onChange={event => onTypeSearch(event.target.value)}
    />
  )
}
Searchbar.propTypes = {
  searchInput: PropTypes.string,
  onTypeSearch: PropTypes.func.isRequired,
}
const SearchInput = styled.input`
  padding: 8px 10px;
  border: 1px solid var(--color-midgrey);
  border-radius: 5px;
`
