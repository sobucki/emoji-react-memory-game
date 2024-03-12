import Card from "../Card";
import { Container } from "./styles";
import emojis from "../../assets/faces.json";
import useGame from "../../hook/use-game";

function Table() {
  const { cards, onRevealCard } = useGame({ optionCards: emojis });

  return (
    <Container>
      {cards.map((emoji, index) => (
        <Card key={index} value={emoji} onClick={onRevealCard} />
      ))}
    </Container>
  );
}

export default Table;
