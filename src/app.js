import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import fetchJoke from './services/fetch-joke'
import colors from './colors'
import { useSpring, animated } from 'react-spring'

const Card = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  background: ${colors.surface};
  box-shadow: 0 32px 44px 0 rgba(64, 68, 90, 0.2);
  border-radius: 30px;
  flex-direction: column;
  padding: 80px 50px;
  min-height: 600px;
  max-width: 1000px;

  @media only screen and (max-width: 900px) {
    padding: 80px 40px;
    min-height: 400px;
  }

  @media only screen and (max-width: 600px) {
    padding: 50px 30px;
    min-height: 300px;
  }
`

const Joke = styled.div`
  margin-bottom: 20px;
`

const Gif = styled.img`
  width: 100%;
  height: auto;
`

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
  const [joke, setJoke] = useState('')
  const [gif, setGif] = useState('')

  const getJoke = () => {
    fetchJoke().then(payload => {
      setJoke(payload.joke)
      setGif(payload.gifUrl)
    })
  }

  useEffect(() => {
    getJoke()
  }, [])

  const fadeIn = useSpring({ from: { opacity: 0 }, opacity: 1 })

  return (
    <AppContainer style={fadeIn}>
      <Title>
        <h1>GifMeAJoke</h1>
        <h2>Refresh for more sweet jokes</h2>
      </Title>
      <Card>
        <Joke>
          <p>{joke}</p>
        </Joke>
        <Gif src={gif} />
      </Card>
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
