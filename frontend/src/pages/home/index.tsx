import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

const Home: React.FC = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <>
      <h1>Home Page</h1>
      <p>Authenticated: {String(user.authenticated)}</p>
      <p>Hi {user.name}</p>
      <button onClick={() => handleLogout()}>Logout</button>
    </>
  )
}

export default Home
