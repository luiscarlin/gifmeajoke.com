import fetchGifService from './fetch-gif-service'
import giphyJsSdkCore from 'giphy-js-sdk-core'

jest.mock('giphy-js-sdk-core')

describe('fetch gif service', () => {
  let translateMock

  beforeEach(() => {
    translateMock = jest.fn(() =>
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

    giphyJsSdkCore.mockReturnValue({ translate: translateMock })
  })

  it('returns a gif url based on a joke', async () => {
    const result = await fetchGifService('some joke')
    expect(result).toBe('gif-url')
  })

  it('requests a youth rated gif that matches some text', async () => {
    await fetchGifService('some text')
    expect(translateMock).toHaveBeenCalledWith('gifs', {
      rating: 'y',
      s: 'some%20text',
    })
  })
})
