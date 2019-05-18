import { useEffect, useState } from 'react'
import fetchJoke from '../services/fetch-joke'

const useDad = () => {
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

  return [joke, gif]
}

export default useDad
