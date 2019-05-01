const fetch = require('node-fetch').default

const API_ENDPOINT = 'https://icanhazdadjoke.com/'

exports.handler = function(event, context, callback) {
  fetch(API_ENDPOINT, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data =>
      callback(null, {
        statusCode: 200,
        body: data.joke,
      })
    )
    .catch(error => ({ statusCode: 422, body: String(error) }))
}
