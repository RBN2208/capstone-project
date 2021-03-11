import styled from 'styled-components'

export default function ServicecardInfo({ counter }) {
  return (
    <ServiceInfo>
      <div>Zeit: {counter} Stunden</div>
      <div>
        Stundensatz:
        <input
          type="text"
          placeholder="servicecard info placeholder"
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
