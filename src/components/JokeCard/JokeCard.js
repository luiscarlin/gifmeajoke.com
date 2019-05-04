import React, { useEffect, useState } from 'react'
import fetchJoke from '../../services/fetch-joke'
import './joke-card.scss'

function JokeCard() {
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
    <div className="joke-card">
      <div className="joke-card__title">
        <h1>{joke}"</h1>
      </div>
      <div className="joke-card__gif">
        <iframe src={gif} frameBorder="0" allowFullScreen />
      </div>
    </div>
  )
}

export default JokeCard
