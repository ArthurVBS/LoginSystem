import React, { useEffect } from 'react'
import Aos from 'aos'

import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AuthContextProvider } from './contexts/AuthContext'

import Routes from './routes'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

const App: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true })
  })

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
