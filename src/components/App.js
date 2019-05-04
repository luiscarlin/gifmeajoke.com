import React, { useEffect, useState } from 'react'
import GphApiClient from 'giphy-js-sdk-core'
import fetchJoke from '../services/fetch-joke'

function App() {
  const client = GphApiClient(process.env.GIPHY_KEY)
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
    <div className="App">
      <h1>"{joke}"</h1>
      <iframe
        src={gif}
        width="480"
        height="271"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      />
      <p>
        <a href={gif}>via GIPHY</a>
      </p>
      <button onClick={() => getJoke()}>Get New Joke</button>
    </div>
  )
}

export default App
