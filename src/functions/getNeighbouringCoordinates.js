const isInRange = (gameState, [x, y]) =>
  x >= 0 && x < gameState.matrix.length && y >= 0 && y < gameState.matrix.length

const getNeighbouringCoordinates = (gameState, [x, y]) => {
  const cells = [
    [x - 1, y],
    [x + 1, y],
    [x, y + 1],
    [x, y - 1],
  ]
  return cells.filter((cell) => isInRange(gameState, cell))
}
export default getNeighbouringCoordinates
