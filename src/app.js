import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import fetchJoke from './services/fetch-joke'
import colors from './colors'

const Card = styled.div`
  display: flex;
  /* padding: 40px; */
  /* max-width: 1000px; */
  width: 100%;
  margin: 0 auto;
  background: ${colors.surface};
  box-shadow: 0 32px 44px 0 rgba(64, 68, 90, 0.2);
  border-radius: 30px;
  flex-direction: column;

  /* @media only screen and (max-width: 900px) {
    padding: 20px;
    margin: 20px;
  } */

  @media only screen and (max-width: 600px) {
    padding: 40px 20px;
    /* margin: 20px; */
  }
`

const Joke = styled.div`
  font-size: 2.25rem;
  color: ${colors.primaryFont};
  line-height: 1.5;
  margin-bottom: 2rem;
`

const Gif = styled.img`
  width: 100%;
  height: auto;
`

const Footer = styled.footer`
  margin-top: 2rem;
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

  return (
    <>
      <Title>
        <h1>GifMeAJoke</h1>
        <h2>swipe card for more sweet jokes</h2>
      </Title>
      <Card>
        <Joke>{joke}</Joke>
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
          & Gifs via{' '}
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
    </>
  )
}
