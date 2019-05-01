import React, { useEffect, useState } from 'react'
import GphApiClient from 'giphy-js-sdk-core'

function App() {
  const client = GphApiClient(process.env.GIPHY_KEY)
  const [joke, setJoke] = useState('')
  const [gif, setGif] = useState('')

  const getJoke = () => {
    // const url = 'https://icanhazdadjoke.com/'
    // const options = {
    //   headers: { Accept: 'application/json' },
    // }
    // fetch(url, options)
    //   .then(response => response.json())
    //   .then(result => {
    //     setJoke(result.joke)
    //     return result.joke
    //   })
    //   .then(joke => {
    //     client
    //       .translate('gifs', { s: joke })
    //       .then(response => setGif(response.data.embed_url))
    //   })
    //   .catch(error => console.log(`There was an error: ${error}`))
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
