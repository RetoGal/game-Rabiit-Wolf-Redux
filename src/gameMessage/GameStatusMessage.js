import * as Styled from "./styled"

const GameStatusMessage = ({ currentGameState }) => (
  <Styled.GameResultMessage>
    {currentGameState.theResultOfTheGame === "youWon"
      ? "YOU WON!!"
      : currentGameState.theResultOfTheGame === "gameOver"
      ? "YOU LOST"
      : ""}
  </Styled.GameResultMessage>
)

export default GameStatusMessage
