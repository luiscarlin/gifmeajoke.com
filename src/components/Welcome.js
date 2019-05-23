import React from 'react'
import styled from 'styled-components'

const Title = styled.header`
  h1 {
    letter-spacing: 5px;
  }
  h2 {
    text-align: center;
  }
`

export default () => {
  return (
    <Title>
      <h1>GifMeAJoke</h1>
      <h2>Refresh for more sweet jokes</h2>
    </Title>
  )
}
