import Card from "./section/card";
import { Header, Table } from "./styles";
import useGame from "../../hook/use-game";
import Menu from "./section/menu/start-game";
import { FormType } from "./section/menu/start-game/types";
import { useState } from "react";
import ConfettiEmoji from "../confetti-emoji";
import FinishGameMenu from "./section/menu/finish-game";

function Game() {
  const { cards, onRevealCard, moves, time, startGame, win, seconds, restart } =
    useGame();
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  const onStartMenu = ({ category, level, optionsCards }: FormType) => {
    setIsOpenMenu(false);
    startGame({ category, level, optionsCards });
  };

  const restartGame = () => {
    restart();
    setIsOpenMenu(true);
  };

  return (
    <>
      <Header>
        <div>time: {time}</div>
        <div>moves: {moves}</div>
      </Header>
      <Table>
        {cards.map((emoji, index) => (
          <Card key={emoji + index} value={emoji} onClick={onRevealCard} />
        ))}
      </Table>
      <Menu isOpen={isOpenMenu} onSubmit={onStartMenu} />
      {win && (
        <>
          <FinishGameMenu
            isOpen
            moves={moves}
            seconds={seconds}
            onStart={restartGame}
          />
        </>
      )}
      <ConfettiEmoji emojis={cards} display={win} />
    </>
  );
}

export default Game;
