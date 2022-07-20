import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Container } from './styles'
import Header from '../../components/header'
import Footer from '../../components/footer'

const Home: React.FC = () => {
  const { user } = useAuth()

  return (
    <>
      <Header />

      <Container>
        <p>Authenticated: {String(user.authenticated)}</p>
        <p>Hi {user.name}</p>
      </Container>

      <Footer />
    </>
  )
}

export default Home
