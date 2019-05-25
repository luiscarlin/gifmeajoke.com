import fetchGifService from './fetch-gif-service'

jest.mock('giphy-js-sdk-core', () => () => ({
  translate: jest.fn(() =>
    Promise.resolve({
      data: {
        images: {
          original: {
            url: 'gif-url',
          },
        },
      },
    })
  ),
}))

describe('fetch gif service', () => {
  it('returns a gif url', async () => {
    const result = await fetchGifService('some text')
    expect(result).toBe('gif-url')
  })
})
