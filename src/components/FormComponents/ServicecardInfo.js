import styled from 'styled-components'

export default function ServicecardInfo({ counter, actualCosts }) {
  return (
    <ServiceInfo>
      <div>Zeit: {counter} Stunden</div>
      <div>
        Stundensatz:
        <input
          type="text"
          placeholder={actualCosts}
          onClick={event => event.stopPropagation()}
        />
      </div>
    </ServiceInfo>
  )
}

const ServiceInfo = styled.form`
  display: grid;
  grid-auto-flow: dense;
  input {
    width: 130px;
  }
`
