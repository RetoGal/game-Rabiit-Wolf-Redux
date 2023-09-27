import { produce } from "immer"
import { createStore } from "redux"
import { ACTIONS } from "./actionsTypes"
import { DEFAULT_STATE, INITIAL_STATE } from "../constants"
import { createSelector } from "reselect"

const getGameState = (state) => state

export const gameStateSelector = createSelector(
  [getGameState],
  (state) => state
)

export const creatNewGameBoard = (defaultState) => ({
  type: ACTIONS.creatNewGameBoard.type,
  defaultState,
})

export const startNewGame = (newGameBoard) => ({
  type: ACTIONS.startNewGame.type,
  newGameBoard,
})

export const changeGameState = (newState) => ({
  type: ACTIONS.changeGameState.type,
  newState,
})

export const gameBoardsReducer = (state = DEFAULT_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ACTIONS.creatNewGameBoard.type: {
        const { defaultState } = action
        return [...state, { ...defaultState }]
      }

      case ACTIONS.startNewGame.type: {
        const { newGameBoard } = action
        const { gameBoardNumber } = newGameBoard
        draft[gameBoardNumber] = newGameBoard
        break
      }

      case ACTIONS.changeGameState.type: {
        const { newState } = action
        const { gameBoardNumber } = newState
        draft[gameBoardNumber] = newState
        break
      }

      default:
        break
    }
  })
}

export const store = createStore(
  gameBoardsReducer,
  INITIAL_STATE,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
)
