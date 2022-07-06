import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Text, WrapperLink } from './styles'

const Message: React.FC = () => {
  const PATH = '/LoginSystem'

  return (
    <Container>
      <Text>Go to Home page, because you're already authenticated</Text>
      <WrapperLink>
        <Link to={PATH + '/'}>home ^^</Link>
      </WrapperLink>
    </Container>
  )
}

export default Message
