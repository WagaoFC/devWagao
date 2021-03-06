import { usePersistedState } from './utils/usePersistedState'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

export function App() {
  const [theme, setTheme] = usePersistedState('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme}/>
      <Main />
    </ThemeProvider>
  )
}