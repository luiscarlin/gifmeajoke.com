import fetchGifService from './fetch-gif-service'
import giphyJsSdkCore from 'giphy-js-sdk-core'

jest.mock('giphy-js-sdk-core')

describe('fetch gif service', () => {
  const translateMock = jest.fn(() =>
    Promise.resolve({
      data: {
        images: {
          original: {
            url: 'gif-url',
          },
        },
      },
    })
  )

  it('returns a gif url', async () => {
    giphyJsSdkCore.mockReturnValue({ translate: translateMock })

    const result = await fetchGifService('some text')
    expect(result).toBe('gif-url')
  })
})
