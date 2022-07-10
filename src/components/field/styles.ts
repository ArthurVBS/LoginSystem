import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const WrapperInput = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  border-radius: 4px;
  min-height: 40px;
  border: 2px solid #0000001f;
  padding: 4px;
`

export const Input = styled.input`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.secondary};
  caret-color: ${props => props.theme.secondary};
  line-height: 2em;
  text-align: justify;
  border: none;
  border-left: 1px solid ${props => props.theme.primary};
  padding-left: 12px;
  width: 100%;
`

export const Icon = styled.i`
  color: ${props => props.theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
`

export const Label = styled.label`
  color: ${props => props.theme.primary};
  font-size: 0.8em;
`
