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

//un mismo jugador tenga varias parejas
//que retorne parejas
//lo que pasa si el array es vacio
//lo que pasa si el array tiene un solo jugador
//que un jugador tenga la altura nula