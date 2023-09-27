import GameBoard from "../gameBoard/GameBoard"
import * as Styled from "./styled"

const GameWrapper = ({ currentGameState }) => {
  const matrix = currentGameState.matrix
  return (
    <Styled.DivGameWrapper matrix={matrix}>
      {matrix.map((row) =>
        row.map((cell, i) => {
          return (
            <Styled.DivСellСharacter key={i}>
              <GameBoard
                cell={cell}
                key={i}
              />
            </Styled.DivСellСharacter>
          )
        })
      )}
    </Styled.DivGameWrapper>
  )
}

export { GameWrapper }
