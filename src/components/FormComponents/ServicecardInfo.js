import styled from 'styled-components'

export default function ServicecardInfo({
  counter,
  currentCosts,
  setUsedCosts,
  onAddingNewCosts,
  index,
}) {
  return (
    <>
      <ServiceInfoForm onSubmit={event => handleSettingNewCosts(event)}>
        <div>Zeit: {counter} Stunden</div>
        <div>
          <label>
            Stundensatz:
            <input
              id="setcosts"
              name="setcosts"
              type="number"
              placeholder={currentCosts}
              onClick={event => event.stopPropagation()}
            />
          </label>
          <button onClick={event => event.stopPropagation()}>Set</button>
        </div>
      </ServiceInfoForm>
    </>
  )
  function handleSettingNewCosts(event) {
    event.preventDefault()
    const formElement = event.target.elements
    const newCosts = Number(formElement.setcosts.value)
    setUsedCosts(newCosts)
    onAddingNewCosts(index, newCosts)
    console.log(newCosts)
  }
}

const ServiceInfoForm = styled.form`
  display: grid;
  grid-auto-flow: dense;
  input {
    width: 130px;
  }
`
