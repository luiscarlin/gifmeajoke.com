import React from 'react'
import styled from 'styled-components'
import ThemeToggle from './ThemeToggle'

const Title = styled.header`
  h1 {
    letter-spacing: 5px;
  }
  h2 {
    text-align: center;
  }
`
const Toggle = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`

const Welcome = () => {
  return (
    <Title>
      <h1>GifMeAJoke</h1>
      <h2>Refresh for more sweet jokes</h2>
      <Toggle>
        <ThemeToggle />
      </Toggle>
    </Title>
  )
}

export default Welcome
