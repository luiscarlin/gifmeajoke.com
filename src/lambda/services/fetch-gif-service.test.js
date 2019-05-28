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

  it('returns a gif url', async () => {
    const result = await fetchGifService('some text')
    expect(result).toBe('gif-url')
  })
})
