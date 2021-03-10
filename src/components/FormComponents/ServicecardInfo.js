import styled from 'styled-components'

export default function ServicecardInfo({ counter, setCostInput }) {
  return (
    <ServiceInfo>
      <div>Zeit: {counter} Stunden</div>
      <div>
        Stundensatz:
        <input
          type="text"
          placeholder="default: 50 €"
          onClick={event => event.stopPropagation()}
          onChange={event => setCostInput(event.target.value)}
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
