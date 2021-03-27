import styled, { keyframes } from 'styled-components/macro'
import { useState } from 'react'

export default function Landingpage({ loadingPage }) {
  const [hideLandingPage, setHideLandingPage] = useState(false)

  setTimeout(() => {
    setHideLandingPage(true)
  }, 3500)

  return (
    <Page
      hidePage={hideLandingPage}
      finishedLoading={loadingPage}
      className={loadingPage && 'fadeOut'}
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
  font-size: 1.5rem;
  padding: 20px 40px;
  border: 1px solid white;
  border-radius: 5px;
`
const Loadingbar = styled.div`
  position: absolute;
  top: 60%;
  width: 200px;
  height: 10px;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 0 10px white;
  background-color: var(--color-green);
`
const loadingAnimation = keyframes`
  0% { width: 0%}
  50% { width: 45%}
  100% { width: 100%}
`
const Loader = styled.div`
  width: 0%;
  height: 100%;
  z-index: 1;
  animation: ${loadingAnimation} 2s;
  background-color: var(--color-dark);
`
