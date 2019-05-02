import fetchJoke from './services/fetch-joke-service'
import fetchGif from './services/fetch-gif-service'

const handler = async () => {
  const joke = await fetchJoke()
  const gifUrl = await fetchGif(joke)

  return {
    statusCode: 200,
    body: JSON.stringify({
      joke,
      gifUrl,
    }),
  }
}

export { handler }
