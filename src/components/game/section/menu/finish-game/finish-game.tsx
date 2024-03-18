import { Content, Overlay } from "./styles";
import { MenuProps } from "./types";

function FinishGameMenu({ isOpen, moves, seconds, onStart }: MenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content onClick={(e) => e.stopPropagation()}>
        <h2>Congratulations!!</h2>
        <p>
          You finished in {seconds} seconds and {moves} moves
        </p>
        <button onClick={onStart}>Play again</button>
      </Content>
    </Overlay>
  );
}

export default FinishGameMenu;
