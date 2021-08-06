/* eslint-env jest */
const algorithm = require('./algorithm')

describe('algorithm()', () => {
  test('Given 2, 3 and 1, should returns 1,2 and 3', () => {
    const given = [2, 3, 1]

    const expected = [1, 2, 3]

    const actual = algorithm(given)

    expect(actual).toEqual(expected)
  })
})
