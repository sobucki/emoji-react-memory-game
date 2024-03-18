import Card from "./section/card";
import { Header, Table } from "./styles";
import useGame from "../../hook/use-game";
import Menu from "./section/menu";
import { FormType } from "./section/menu/types";
import { useState } from "react";
import ConfettiEmoji from "../confetti-emoji";

function Game() {
  const { cards, onRevealCard, moves, time, startGame, win } = useGame();
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
      {win && <ConfettiEmoji emojis={cards} />}
    </>
  );
}

export default Game;
