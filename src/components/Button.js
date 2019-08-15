import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: red;
`

const Button = ({ onClick, text, mode }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>
}

export default Button
