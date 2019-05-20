import axios from 'axios'

const API_ENDPOINT = 'https://icanhazdadjoke.com/'

export default async () => {
  const response = await axios
    .get(API_ENDPOINT, { headers: { Accept: 'application/json' } })
    .catch(console.error)

  return response.data.joke
}
