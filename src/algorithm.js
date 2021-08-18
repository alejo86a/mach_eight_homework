module.exports = (players, sumOfHeight) => {
  let result = []
  for (let i = 0; i < players.length; i++) {
    const player = players[i]
    const resultAux = findComplement(parseInt(player.h_in), sumOfHeight, [], players.slice(i + 1, players.length)).map(r => `- ${player.first_name} ${player.last_name}         ${r.name}`)
    if (resultAux.length > 0) {
      result.push(resultAux.join('\n'))
    }
  }
  if (result.length === 0) {
    return 'No matches found'
  } else {
    return result.join('\n')
  }
}

function findComplement (firstHeight, sumOfHeight, result, playersAux) {
  if (playersAux.length === 0) {
    return result
  }
  if ((sumOfHeight - firstHeight) === parseInt(playersAux[0].h_in)) {
    result.push({ name: playersAux[0].first_name + ' ' + playersAux[0].last_name, height: playersAux[0].h_in })
  }
  return findComplement(firstHeight, sumOfHeight, result, playersAux.slice(1, playersAux.length))
}
