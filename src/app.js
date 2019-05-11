import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import fetchJoke from './services/fetch-joke'

const Card = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  background: #fbfbfd;
  box-shadow: 0 32px 44px 0 rgba(64, 68, 90, 0.2);
  border-radius: 30px;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    padding: 20px;
    margin: 20px;
  }

  @media only screen and (max-width: 600px) {
    padding: 10px;
    margin: 10px;
  }
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
      {/* <Card>
        <div>{joke}</div>
        <iframe
          src={gif}
          height="500"
          width="100%"
          border="none"
          frameBorder="0"
          allowFullScreen
        />
      </Card> */}
    </>
  )
}
