/* eslint-env jest */
const algorithm = require('./algorithm')
const fs = require('fs')

let rawdata = fs.readFileSync('./data.json')
const players = JSON.parse(rawdata).values

describe('algorithm()', () => {
  test('Given 139 should returns example', () => {
    const given = 139

    const expected = `- Brevin Knight         Nate Robinson
- Nate Robinson         Mike Wilks`

    const actual = algorithm(players, given)

    expect(actual).toEqual(expected)
  })

  test('If no matches are found, should retuns "No matches found"', () => {
    const given = 0

    const expected = 'No matches found'

    const actual = algorithm(players, given)

    expect(actual).toEqual(expected)
  })

  test('Given an empty array should returns "No matches found"', () => {
    const given = 139

    const expected = 'No matches found'

    const actual = algorithm([], given)

    expect(actual).toEqual(expected)
  })

  test('Given 139 should returns example although some players have height null', () => {
    const given = 139

    const expected = `- Brevin Knight         Nate Robinson
- Nate Robinson         Mike Wilks`

    let playersAux = Object.assign(players)

    playersAux[0].h_in = null
    playersAux[1].h_in = null
    playersAux[2].h_in = null

    const actual = algorithm(playersAux, given)

    expect(actual).toEqual(expected)
  })
})
