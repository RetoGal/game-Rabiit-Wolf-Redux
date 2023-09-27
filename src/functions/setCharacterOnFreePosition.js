import { FREE_CELL } from "../constants"
import { CHARACTER_PARAMS } from "./objCaracterParams"

const createMatrix = (gameBoardSize) =>
  new Array(gameBoardSize)
    .fill(FREE_CELL)
    .map(() => new Array(gameBoardSize).fill(FREE_CELL))

const getRandomFreeCell = (arr) => {
  const x = Math.floor(Math.random() * arr.length)
  const y = Math.floor(Math.random() * arr.length)
  return arr[x][y] === FREE_CELL ? [x, y] : getRandomFreeCell(arr)
}

const setCharacterInFreePosition = (arr, character) => {
  const [x, y] = getRandomFreeCell(arr)
  arr[x][y] = character
}

const setCountCharacter = (arr, count, character) => {
  for (let i = 0; i < count; i++) {
    setCharacterInFreePosition(arr, character)
  }
}

const createGameBoardMatrix = (gameBoardSize) => {
  const matrix = createMatrix(gameBoardSize)
  CHARACTER_PARAMS.wolf.count = Math.floor((65 * matrix.length) / 100)
  CHARACTER_PARAMS.ban.count = Math.floor((45 * matrix.length) / 100)
  Object.values(CHARACTER_PARAMS).map((character) =>
    setCountCharacter(matrix, character.count, character.name)
  )
  return matrix
}

export default createGameBoardMatrix
