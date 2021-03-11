import styled from 'styled-components'

export default function ServicecardInfo({
  counter,
  currentCosts,
  setNewCosts,
}) {
  return (
    <ServiceInfoForm>
      <div>Zeit: {counter} Stunden</div>
      <div>
        <label>
          Stundensatz:
          <input
            id="setcosts"
            name="setcosts"
            type="text"
            placeholder={currentCosts}
            onClick={event => event.stopPropagation()}
          />
        </label>
        <button onClick={handleClick}>Set</button>
      </div>
    </ServiceInfoForm>
  )

  function handleClick() {
    const inputValue = document.getElementById('setcosts')
    const newCosts = Number(inputValue.value)
    console.log(newCosts)
    setNewCosts(newCosts)
    return newCosts
  }
}

const ServiceInfoForm = styled.form`
  display: grid;
  grid-auto-flow: dense;
  input {
    width: 130px;
  }
`
