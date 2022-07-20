import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`

export const LeftBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const Image = styled.img`
  max-width: 32px;
`

export const Label = styled.label`
  text-align: center;
  font-size: 1.5em;
  font-weight: 700;
  letter-spacing: 2px;
`

export const RightBox = styled.div`
  padding: 8px;
`

export const Button = styled.button`
  background-color: ${props => props.theme.background};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
`

export const Icon = styled.i`
  color: ${props => props.theme.primary};
  padding: 8px;
  transition: color 0.4s;

  &:hover {
    color: ${props => props.theme.secondary};
  }
`
