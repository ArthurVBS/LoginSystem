import React from 'react'
import LoginForm from '../../components/loginForm'
import Message from '../../components/message'
import { useAuth } from '../../contexts/AuthContext'
import { Container } from './styles'

const Login: React.FC = () => {
  const { user } = useAuth()

  return (
    <Container>{user.authenticated ? <Message /> : <LoginForm />}</Container>
  )
}

export default Login
