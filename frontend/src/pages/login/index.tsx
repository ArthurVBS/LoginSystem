import React from 'react'
import Form from '../../components/form'
import Message from '../../components/message'
import { useAuth } from '../../contexts/AuthContext'
import { Container } from './styles'

const Login: React.FC = () => {
  const { user } = useAuth()

  return <Container>{user.authenticated ? <Message /> : <Form />}</Container>
}

export default Login
