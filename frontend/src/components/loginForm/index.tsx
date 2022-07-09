import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { validateEmail } from '../../utils/validate'
import {
  Button,
  Field,
  Footer,
  FormContainer,
  Header,
  Icon,
  Input,
  Label,
  Main,
  Text,
  Title,
  WrapperInput,
} from './styles'

const LoginForm: React.FC = () => {
  const PATH = '/LoginSystem'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, login } = useAuth()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      console.log('Email')
      return
    }

    login(email, password)
  }

  return (
    <FormContainer onSubmit={e => handleSubmit(e)}>
      <Header>
        <Title>Log In to your account</Title>
      </Header>

      <Main>
        <Field>
          <Label htmlFor="email">Email address</Label>
          <WrapperInput>
            <Icon className="fas fa-user"></Icon>
            <Input
              required
              value={email}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              minLength={2}
              maxLength={150}
              onChange={e => setEmail(e.target.value)}
            />
          </WrapperInput>
        </Field>

        <Field>
          <Label htmlFor="password">Password</Label>
          <WrapperInput>
            <Icon className="fas fa-lock"></Icon>
            <Input
              required
              value={password}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              minLength={2}
              maxLength={32}
              onChange={e => setPassword(e.target.value)}
            />
          </WrapperInput>
        </Field>

        <Button>Log In</Button>
      </Main>

      <Footer>
        <Text>Are you new?</Text>
        <Link to={PATH + '/signup'}>Sign Up</Link>
      </Footer>
    </FormContainer>
  )
}

export default LoginForm
