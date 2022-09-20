import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Profile } from './components/Profile'
import { GlobalStyle } from './styles/GlobalStyle'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />

      <Profile />
    </ThemeProvider>
  )
}
