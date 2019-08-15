import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${props =>
    props.type === 'primary'
      ? props.theme.background
      : props.theme.primaryFont};
  color: ${props =>
    props.type === 'primary'
      ? props.theme.primaryFont
      : props.theme.background};
  cursor: pointer;
  border: 2px solid;
  border-color: ${props => props.theme.background};
  padding: 0.5rem 1.5rem;
`

const Button = ({ onClick, text, type }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {text}
    </StyledButton>
  )
}

export default Button
