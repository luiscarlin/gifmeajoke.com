import axios from 'axios'

const API_ENDPOINT = '/.netlify/functions/getJokeData'

const fetchJoke = async () => {
  const response = await axios.get(API_ENDPOINT).catch(console.error)
  return response.data
}

export default fetchJoke
