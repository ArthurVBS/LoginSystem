import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${props => props.theme.background};
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top: 1px solid ${props => props.theme.primary};
  padding: 16px;
`

export const Text = styled.p`
  text-align: center;
`

export const Label = styled.label`
  color: ${props => props.theme.primary};
  font-weight: 700;
`

export const TextLink = styled.a`
  color: ${props => props.theme.primary};
  font-weight: 700;
  margin-left: 4px;
  transition: color 0.4s;

  &:hover {
    color: ${props => props.theme.secondary};
  }
`
