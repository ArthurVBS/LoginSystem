import styled from 'styled-components'

interface ContainerProps {
  isHide: boolean
}

export const Container = styled.div<ContainerProps>`
  background-color: transparent;
  position: fixed;
  left: 0;
  bottom: 50px;
  width: calc(100% - 32px);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${props => (props.isHide ? 'hidden' : 'visible')};
  padding: 8px;
  margin: 16px;
  z-index: 1;
  animation: fadeIn 0.6s, fadeOut 0.6s 2.5s;

  @keyframes fadeIn {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 50px;
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      bottom: 50px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
`

export const Text = styled.h4`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.primary};
  min-width: 260px;
  max-width: 460px;
  text-align: center;
  border-radius: 8px;
  border: 2px solid ${props => props.theme.primary};
  padding: 8px;
`
