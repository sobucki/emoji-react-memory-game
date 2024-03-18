import Card from "./section/card";
import { Header, Table } from "./styles";
import useGame from "../../hook/use-game";
import Menu from "./section/menu/start-game";
import { FormType } from "./section/menu/start-game/types";
import { useState } from "react";
import ConfettiEmoji from "../confetti-emoji";
import FinishGameMenu from "./section/menu/finish-game";

function Game() {
  const { cards, onRevealCard, moves, time, startGame, win, seconds } =
    useGame();
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  const onStartMenu = ({ category, level, optionsCards }: FormType) => {
    setIsOpenMenu(false);
    startGame({ category, level, optionsCards });
  };

  return (
    <>
      <Header>
        <div>time: {time}</div>
        <div>moves: {moves}</div>
        <div>time</div>
      </Header>
      <Table>
        {cards.map((emoji, index) => (
          <Card key={index} value={emoji} onClick={onRevealCard} />
        ))}
      </Table>
      <Menu isOpen={isOpenMenu} onSubmit={onStartMenu} />
      {win && (
        <>
          <FinishGameMenu
            isOpen
            moves={moves}
            seconds={seconds}
            onStart={() => null}
          />
          <ConfettiEmoji emojis={cards} />
        </>
      )}
    </>
  );
}

export default Game;
