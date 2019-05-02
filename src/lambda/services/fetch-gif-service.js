import client from 'giphy-js-sdk-core'

export default async jokeText => {
  const response = await client(process.env.GIPHY_KEY).translate('gifs', {
    s: jokeText,
  })

  return response.data.embed_url
}
