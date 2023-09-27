import getNeighbouringCoordinates from "./getNeighbouringCoordinates"
import { CHARACTER_PARAMS } from "./objCaracterParams"

const getRabbitNextToWolf = (gameState, [x, y]) => {
  const matrix = gameState.matrix
  const sidesWolf = getNeighbouringCoordinates(gameState, [x, y])
  sidesWolf.forEach((freeCell) => {
    if (gameState.theGameContinues === false) {
      return
    }
    const [x, y] = freeCell
    if (matrix[x][y] === CHARACTER_PARAMS.rabbit.name) {
      gameState.theGameContinues = false
      gameState.theResultOfTheGame = "gameOver"
    }
  })
}
export default getRabbitNextToWolf
