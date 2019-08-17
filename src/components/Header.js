import React from 'react'
import styled from 'styled-components'
import ThemeToggle from './ThemeToggle'

const HeaderContainer = styled.header`
  margin-bottom: 2rem;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    letter-spacing: 5px;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <h1>GifMeAJoke</h1>
        <h2>Refresh for more sweet jokes</h2>
        <ThemeToggle />
      </TitleContainer>
    </HeaderContainer>
  )
}

export default Header
