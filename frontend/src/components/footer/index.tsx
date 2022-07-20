import React from 'react'
import { Container, Label, Text, TextLink } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <Text>
        Made with <Label>♡</Label> and React by
        <TextLink href="https://github.com/ArthurVBS" target="_blank">
          Arthur V.B.S.
        </TextLink>
      </Text>
    </Container>
  )
}

export default Footer
