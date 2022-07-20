import React, { useState } from 'react'
import { Container, Text } from './styles'

type Props = {
  message: string
  setErrPopUp: React.Dispatch<
    React.SetStateAction<{
      show: boolean
      message: string
    }>
  >
}

const PopUp: React.FC<Props> = ({ message, setErrPopUp }) => {
  const [isHide, setIsHide] = useState(false)

  setTimeout(() => {
    setIsHide(true)
    setErrPopUp({ show: false, message: message })
  }, 3000)

  return (
    <Container isHide={isHide}>
      <Text>{message}</Text>
    </Container>
  )
}

export default PopUp
