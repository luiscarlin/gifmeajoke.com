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
`

const Button = ({ onClick, text, type }) => {
  console.log(type)

  return (
    <StyledButton type={type} onClick={onClick}>
      {text}
    </StyledButton>
  )
}

export default Button
