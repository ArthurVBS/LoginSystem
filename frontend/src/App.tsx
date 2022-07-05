import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'
import Routes from './routes'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
