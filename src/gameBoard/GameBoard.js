import { FREE_CELL } from "../constants"
import { CHARACTER_PARAMS } from "../functions/objCaracterParams"
import * as Styled from "./styled"

const GameBoard = (props) => {
  if (props.cell === FREE_CELL) {
    return
  }
  let imgSrc
  if (props.cell === CHARACTER_PARAMS.rabbit.name) {
    imgSrc = CHARACTER_PARAMS.rabbit.src
  } else if (props.cell === CHARACTER_PARAMS.wolf.name) {
    imgSrc = CHARACTER_PARAMS.wolf.src
  } else if (props.cell === CHARACTER_PARAMS.ban.name) {
    imgSrc = CHARACTER_PARAMS.ban.src
  } else if (props.cell === CHARACTER_PARAMS.home.name) {
    imgSrc = CHARACTER_PARAMS.home.src
  }

  return <Styled.ImgCharacters src={imgSrc} />
}
export default GameBoard
