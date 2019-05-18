import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import Card from './components/card'

const Footer = styled.footer`
  margin-top: 20px;
  text-align: center;
`

const Title = styled.header`
  h1 {
    letter-spacing: 5px;
  }
  h2 {
    text-align: center;
  }
`

const AppContainer = styled(animated.div)`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;

  margin: 40px;

  @media only screen and (max-width: 900px) {
    margin: 40px;
  }

  @media only screen and (max-width: 600px) {
    margin: 20px;
  }
`

export default () => {
  const fadeIn = useSpring({ from: { opacity: 0 }, opacity: 1 })

  return (
    <AppContainer style={fadeIn}>
      <Title>
        <h1>GifMeAJoke</h1>
        <h2>Refresh for more sweet jokes</h2>
      </Title>
      <Card />
      <Footer>
        <h2>
          Jokes from{' '}
          <a
            href="https://icanhazdadjoke.com/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            icanhazdadjoke
          </a>{' '}
          | Gifs via{' '}
          <a
            href="https://developers.giphy.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Giphy
          </a>
        </h2>

        <h2>
          Made by{' '}
          <a
            href="https://twitter.com/lgcarlin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Luis Carlin
          </a>{' '}
          | Code on{' '}
          <a
            href="https://github.com/luiscarlin/gifmeajoke"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </h2>
      </Footer>
    </AppContainer>
  )
}
