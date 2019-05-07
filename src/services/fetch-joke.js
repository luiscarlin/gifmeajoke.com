import axios from 'axios'

const API_ENDPOINT = '/.netlify/functions/getJokeData'

const fetchJoke = async () => {
  try {
    const response = await axios.get(API_ENDPOINT)
    return response.data
  } catch (error) {
    return error
  }
}

export default fetchJoke
