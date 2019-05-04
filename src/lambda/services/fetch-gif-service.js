import client from 'giphy-js-sdk-core'

export default async jokeText => {
  try {
    const response = await client(process.env.GIPHY_KEY).translate('gifs', {
      s: encodeURI(jokeText),
    })
    return response.data.embed_url
  } catch (error) {
    console.error(error)
  }
}
