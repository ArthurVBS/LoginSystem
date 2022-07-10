import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AuthContextProvider } from './contexts/AuthContext'
import Routes from './routes'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <GlobalStyles />
          <Routes />
        </AuthContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
