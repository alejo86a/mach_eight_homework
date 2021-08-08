/* eslint-env jest */
const algorithm = require('./algorithm')
const fs = require('fs')

let rawdata = fs.readFileSync('./src/data.json')
const players = JSON.parse(rawdata).values

describe('algorithm()', () => {
  test('Given 139 should returns example', () => {
    const given = 139

    const expected = `- Brevin Knight         Nate Robinson
- Nate Robinson         Mike Wilks`

    const actual = algorithm(players, given)

    expect(actual).toEqual(expected)
  })
})

// un mismo jugador tenga varias parejas
// que retorne parejas
// lo que pasa si el array es vacio
// lo que pasa si el array tiene un solo jugador
// que un jugador tenga la altura nula
