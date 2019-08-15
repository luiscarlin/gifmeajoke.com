import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${props =>
    props.primary ? props.theme.surface : props.theme.primaryFont};
`

const Button = ({ onClick, text, mode }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>
}

export default Button
