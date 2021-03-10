import styled from 'styled-components/macro'

export default styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: ${props => props.bgColor.name};
  border: none;
  color: white;
  padding: 0.2em 0.6em;
  border-radius: 3px;
  font-size: 1.2rem;
`
