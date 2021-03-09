import styled from 'styled-components/macro'

export default styled.button`
  appearance: none;
  background-color: ${props => props.bgColor.name};
  border: none;
  color: white;
  padding: 1px 8px;
  border-radius: 3px;
  font-size: 1.2rem;
`
