import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Button, Field, FormContainer, Title } from './styles'

const Form: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, login } = useAuth()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    login(email, password)
  }
  return (
    <FormContainer onSubmit={e => handleSubmit(e)}>
      <Title>Welcome ^^</Title>
      <p>Autenticado: {String(user.authenticated)}</p>
      <p>Email: Qualquer - Senha: 123</p>
      <Field>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="email"
          name="email"
          id="email"
          onChange={e => setEmail(e.target.value)}
        />
      </Field>
      <Field>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          type="password"
          name="password"
          id="password"
          onChange={e => setPassword(e.target.value)}
        />
      </Field>
      <Button>Submit</Button>
    </FormContainer>
  )
}

export default Form
