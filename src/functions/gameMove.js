import { CHARACTER_PARAMS } from "./objCaracterParams"
import getCordinatesOfCharacter from "./getCordinatesOfCharacter"
import moveRabbit from "./moveRabbit"
import moveWolvesOnNewBox from "./moveWolvesOnNewBox"

const gameMovement = (direction, gameState) => {
  const matrix = gameState.matrix
  const cordinateOfCharacter = getCordinatesOfCharacter(
    gameState,
    CHARACTER_PARAMS.rabbit.name
  )
  const [x, y] = cordinateOfCharacter[0]
  let newX = x
  let newY = y
  if (direction === "left") {
    y === 0 ? (newY = matrix.length - 1) : (newY = y - 1)
  } else if (direction === "right") {
    y === matrix.length - 1 ? (newY = 0) : (newY = y + 1)
  } else if (direction === "up") {
    x === 0 ? (newX = matrix.length - 1) : (newX = x - 1)
  } else if (direction === "down") {
    x === matrix.length - 1 ? (newX = 0) : (newX = x + 1)
  }
  moveRabbit(gameState, newX, newY)
  moveWolvesOnNewBox(gameState)

  return gameState
}

export default gameMovement
