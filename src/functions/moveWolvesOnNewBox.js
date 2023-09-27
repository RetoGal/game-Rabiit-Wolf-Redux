import getCordinatesOfCharacter from "./getCordinatesOfCharacter"
import findNearestСell from "./findNearestСell"
import getRabbitNextToWolf from "./getRabbitNextToWolf"
import { CHARACTER_PARAMS } from "./objCaracterParams"
const FREE_CELL = 0

const moveWolvesOnNewBox = (gameState) => {
  const matrix = gameState.matrix
  const sideWolves = getCordinatesOfCharacter(
    gameState,
    CHARACTER_PARAMS.wolf.name
  )
  sideWolves.forEach((cordinateWolves) => {
    if (gameState.theGameContinues === false) {
      return
    }
    const [XnearestСell, YnearestСell] = findNearestСell(
      gameState,
      cordinateWolves
    )
    const [Xwolves, Ywolves] = cordinateWolves
    matrix[Xwolves][Ywolves] = FREE_CELL
    matrix[XnearestСell][YnearestСell] = CHARACTER_PARAMS.wolf.name
    getRabbitNextToWolf(gameState, cordinateWolves)
    return gameState
  })
}

export default moveWolvesOnNewBox
