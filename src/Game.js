import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  BUTTONS_DIRECTION,
  DEFAULT_STATE,
  SELECT_OPTION_VALUE,
} from "./constants"
import {
  changeGameState,
  creatNewGameBoard,
  gameStateSelector,
  startNewGame,
} from "./redux/actions"
import createGameBoardMatrix from "./functions/setCharacterOnFreePosition"
import gameMovement from "./functions/gameMove"
import { cloneObject } from "./functions/utils"
import {
  DirectionButons,
  DivForDirectionButtons,
  NewGameAreaButton,
  SelectGameBoard,
  StartGameButton,
} from "./styled"
import GameStatusMessage from "./gameMessage/GameStatusMessage"
import { GameWrapper } from "./GameWrapper/GameWrapper"

export const Game = () => {
  const currentGameState = useSelector(gameStateSelector)
  const dispatch = useDispatch()
  const [optionValue, setOptionValue] = useState(SELECT_OPTION_VALUE[0])

  const selectChange = (e) => setOptionValue(parseInt(e.target.value))
  const createNewGameBoard = () => dispatch(creatNewGameBoard(DEFAULT_STATE))

  const startGame = (gameBoardNumber) => {
    const newGameState = {
      matrix: createGameBoardMatrix(optionValue),
      theGameContinues: true,
      theResultOfTheGame: "",
      gameBoardNumber: gameBoardNumber,
    }

    dispatch(startNewGame(newGameState))
  }

  const changeGame = (direction, gameState) => {
    const state = cloneObject(gameState)
    const newGameState = gameMovement(direction, state)
    dispatch(changeGameState(newGameState))
  }
  return (
    <>
      <NewGameAreaButton onClick={createNewGameBoard}>
        New Game
      </NewGameAreaButton>
      {currentGameState.map((gameState, i) => {
        const uniqueKey = `gameState_${i}`
        return (
          <div key={uniqueKey}>
            <SelectGameBoard
              key={`${uniqueKey}_select`}
              onChange={selectChange}
            >
              {SELECT_OPTION_VALUE.map((optionValue, index) => (
                <option
                  key={`${uniqueKey}_option_${index}`}
                  value={optionValue}
                >
                  {optionValue}*{optionValue}
                </option>
              ))}
            </SelectGameBoard>
            <StartGameButton
              key={`${uniqueKey}_start`}
              onClick={() => startGame(i)}
            >
              START
            </StartGameButton>

            {currentGameState[i].theGameContinues === false ? (
              <GameStatusMessage
                currentGameState={currentGameState[i]}
                key={`${uniqueKey}_status_message`}
              />
            ) : (
              <GameWrapper
                currentGameState={currentGameState[i]}
                key={`${uniqueKey}_game_wrapper`}
              />
            )}

            <DivForDirectionButtons key={`${uniqueKey}_direction_buttons`}>
              {BUTTONS_DIRECTION.map((direction) => {
                return (
                  <DirectionButons
                    direction={direction}
                    key={`${uniqueKey}_direction_${direction}`}
                    onClick={() => {
                      changeGame(direction, { ...gameState })
                    }}
                  >
                    {direction}
                  </DirectionButons>
                )
              })}
            </DivForDirectionButtons>
          </div>
        )
      })}
    </>
  )
}
