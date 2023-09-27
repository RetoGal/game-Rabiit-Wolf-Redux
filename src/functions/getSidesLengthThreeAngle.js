import getFreeBoxNextToWolf from "./getFreeBoxNextToWolf"
import getCordinatesOfCharacter from "./getCordinatesOfCharacter"
import { calculateDistance } from "./calculateDistance"
import { CHARACTER_PARAMS } from "./objCaracterParams"

const getSidesLengthThreeAngle = (gameState, [x, y]) => {
  const sidesWolf = getFreeBoxNextToWolf(gameState, [x, y])
  const cordRabbit = getCordinatesOfCharacter(
    gameState,
    CHARACTER_PARAMS.rabbit.name
  )
  return sidesWolf.map((item) => calculateDistance(item, cordRabbit[0]))
}

export default getSidesLengthThreeAngle
