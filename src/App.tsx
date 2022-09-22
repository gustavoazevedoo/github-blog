import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Router } from './Router'
import { GlobalStyle } from './styles/GlobalStyle'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />

      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
