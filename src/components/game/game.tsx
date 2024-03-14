import Card from "./section/card";
import { Header, Table } from "./styles";
import emojis from "../../assets/faces.json";
import useGame from "../../hook/use-game";
import Menu from "./section/menu";
import { FormType } from "./section/menu/types";
import { useState } from "react";

function Game() {
  const { cards, onRevealCard, moves, time } = useGame({ optionCards: emojis });
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  const onStartMenu = (values: FormType) => {
    console.log(values);
    setIsOpenMenu(false);
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
    </>
  );
}

export default Game;
