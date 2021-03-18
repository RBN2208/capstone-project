import { MemoryRouter } from 'react-router'
import GlobalStyle from '../src/GlobalStyles'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators =[
  Story => (
    <>
    <MemoryRouter>
      <GlobalStyle />
      <Story />
      </MemoryRouter>
    </>
  ),
]