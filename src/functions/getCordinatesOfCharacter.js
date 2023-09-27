const getCordinatesOfCharacter = (gameState, character) => {
  const matrix = gameState.matrix

  const cordsCharacter = matrix.reduce((acc, row, x) => {
    const characterIndices = row.reduce((indices, cell, y) => {
      if (cell === character) {
        indices.push([x, y])
      }
      return indices
    }, [])

    return acc.concat(characterIndices)
  }, [])

  return cordsCharacter
}

export default getCordinatesOfCharacter
