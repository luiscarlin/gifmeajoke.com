import client from 'giphy-js-sdk-core'
require('dotenv').config()

export default async jokeText => {
  try {
    const response = await client(process.env.GIPHY_KEY).translate('gifs', {
      s: encodeURI(jokeText),
      weirdness: 0,
    })
    return response.data.embed_url
  } catch (error) {
    console.error(error)
  }
}
