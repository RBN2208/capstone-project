import { useState } from 'react'
import styled, { keyframes } from 'styled-components/macro'

export default function Landingpage({ isLoaded }) {
  const [hidePage, setHidePage] = useState(false)

  setTimeout(() => {
    setHidePage(true)
  }, 3500)

  return (
    <Page
      finishedLoading={isLoaded}
      hidePage={hidePage}
      className={isLoaded && 'fadeOut'}
    >
      <Textbox>calcuFix</Textbox>
      <Loadingbar>
        <Loader></Loader>
      </Loadingbar>
    </Page>
  )
}

const Page = styled.main`
  display: ${props => (props.hidePage ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  z-index: 1;
  background-image: linear-gradient(
    120deg,
    var(--color-green) 0%,
    var(--color-darkgreen) 100%
  );
  &.fadeOut {
    opacity: 0;
    transition: all 2s;
  }
`

const Textbox = styled.span`
  color: white;
  padding: 20px 40px;
  border: 1px solid white;
  border-radius: 5px;
  font-size: 1.5rem;
`
const Loadingbar = styled.div`
  position: absolute;
  top: 60%;
  width: 200px;
  height: 10px;
  border-radius: 50px;
  background-color: var(--color-green);
  overflow: hidden;
  box-shadow: 0 0 10px white;
`
const loadingAnimation = keyframes`
  0% { width: 0%}
  50% { width: 45%}
  100% { width: 100%}
`
const Loader = styled.div`
  background-color: var(--color-dark);
  width: 0%;
  height: 100%;
  z-index: 1;
  animation: ${loadingAnimation} 2s;
`
