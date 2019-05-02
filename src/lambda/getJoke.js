const fetch = require('node-fetch').default
const GphApiClient = require('giphy-js-sdk-core')

const API_ENDPOINT = 'https://icanhazdadjoke.com/'

const handler = (event, context, callback) => {
  const client = GphApiClient(process.env.GIPHY_KEY)

  const giphyPromise = jokeText => {
    return new Promise((resolve, reject) => {
      client
        .translate('gifs', { s: jokeText })
        .then(payload => resolve(payload.data.embed_url))
        .catch(error => reject(error))
    })
  }

  fetch(API_ENDPOINT, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data => data.joke)
    .then(joke => {
      giphyPromise(joke).then(gifUrl => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            joke,
            gifUrl,
          }),
        })
      })
    })
}

export { handler }
