import axios from 'axios'

const API_ENDPOINT = 'https://icanhazdadjoke.com/'

export default async () => {
  try {
    const response = await axios.get(API_ENDPOINT, {
      headers: { Accept: 'application/json' },
    })
    return response.data.joke
  } catch (error) {
    console.error(error)
  }
}
