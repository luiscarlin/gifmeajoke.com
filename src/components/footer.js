import React from 'react'

export default () => {
  return (
    <>
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
    </>
  )
}
