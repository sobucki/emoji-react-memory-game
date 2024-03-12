import Card from "./section/card";
import { Header, Table } from "./styles";
import emojis from "../../assets/faces.json";
import useGame from "../../hook/use-game";

function Game() {
  const { cards, onRevealCard, moves } = useGame({ optionCards: emojis });

  return (
    <>
      <Header>
        <div>time</div>
        <div>moves: {moves}</div>
        <div>time</div>
      </Header>
      <Table>
        {cards.map((emoji, index) => (
          <Card key={index} value={emoji} onClick={onRevealCard} />
        ))}
      </Table>
    </>
  );
}

export default Game;