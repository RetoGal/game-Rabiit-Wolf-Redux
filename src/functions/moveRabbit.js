import getCordinatesOfCharacter from "./getCordinatesOfCharacter"
import { CHARACTER_PARAMS } from "./objCaracterParams"

const FREE_CELL = 0
const moveRabbit = (gameState, x, y) => {
  const matrix = gameState.matrix
  const cordinateOfRabbit = getCordinatesOfCharacter(
    gameState,
    CHARACTER_PARAMS.rabbit.name
  )
  const [rabbitX, rabbitY] = cordinateOfRabbit[0]
  matrix[rabbitX][rabbitY] = FREE_CELL

  if (matrix[x][y] === FREE_CELL) {
    matrix[x][y] = CHARACTER_PARAMS.rabbit.name
  } else if (matrix[x][y] === CHARACTER_PARAMS.wolf.name) {
    gameState.theGameContinues = false
    gameState.theResultOfTheGame = "gameOver"
  } else if (matrix[x][y] === CHARACTER_PARAMS.home.name) {
    gameState.theGameContinues = false
    gameState.theResultOfTheGame = "youWon"
  } else if (matrix[x][y] === CHARACTER_PARAMS.ban.name) {
    matrix[rabbitX][rabbitY] = CHARACTER_PARAMS.rabbit.name
    matrix[x][y] = CHARACTER_PARAMS.ban.name
  }
  return gameState
}

export default moveRabbit
