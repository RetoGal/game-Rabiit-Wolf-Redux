import getNeighbouringCoordinates from "./getNeighbouringCoordinates"
const FREE_CELL = 0

const getFreeBoxNextToWolf = (gameState, [x, y]) => {
  const matrix = gameState.matrix
  const sidesWolf = getNeighbouringCoordinates(gameState, [x, y])
  const result = []
  sidesWolf.forEach((freeCell) => {
    if (gameState.theGameContinues === false) {
      return
    }
    const [x, y] = freeCell

    matrix[x][y] === FREE_CELL && result.push(freeCell)
  })
  return result
}
export default getFreeBoxNextToWolf
