import getSidesLengthThreeAngle from "./getSidesLengthThreeAngle"
import getFreeBoxNextToWolf from "./getFreeBoxNextToWolf"

const findNearestСell = (gameState, [x, y]) => {
  const lengthCell = getSidesLengthThreeAngle(gameState, [x, y])
  const nearestСell = getFreeBoxNextToWolf(gameState, [x, y])
  const min = Math.min(...lengthCell)
  const index = lengthCell.indexOf(min)
  return nearestСell[index]
}

export default findNearestСell
