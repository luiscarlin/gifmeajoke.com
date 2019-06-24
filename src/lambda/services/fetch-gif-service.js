import client from 'giphy-js-sdk-core'
require('dotenv').config()

export default async jokeText => {
  const response = await client(process.env.GIPHY_KEY)
    .translate('gifs', { s: encodeURI(jokeText), rating: 'y' })
    .catch(console.error)

  return response.data.images.original.url
}
