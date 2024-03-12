import Card from "../Card";
import { Container } from "./styles";
import emojis from "../../assets/faces.json";
// import { duplicateUniqueList, shuffle } from "../../util/utils";
import { useState } from "react";
import useGame from "../../hook/use-game";

function Table() {
  const { cards } = useGame({ optionCards: emojis });
  // const shuffledList = useMemo(() => {
  //   const duplicatedCards = duplicateUniqueList(emojis.slice(0, 10));
  //   return shuffle(duplicatedCards);
  // }, []);

  const [revealedCard, setRevealedCard] = useState<{
    value: string;
    setMatchedCard: (value: boolean) => void;
  } | null>(null);

  const onRevealCard = (
    value: string,
    setMatchedCard: (value: boolean) => void
  ) => {
    console.log("entrou", value);

    if (revealedCard) {
      if (value === revealedCard.value) {
        setMatchedCard(true);
        revealedCard.setMatchedCard(true);
      } else {
        setTimeout(() => {
          setMatchedCard(false);
          revealedCard.setMatchedCard(false);
        }, 1000);
      }
      setRevealedCard(null);
    } else {
      setRevealedCard({ value, setMatchedCard });
    }
  };

  return (
    <Container>
      {cards.map((emoji, index) => (
        <Card key={index} value={emoji} onClick={onRevealCard} />
      ))}
    </Container>
  );
}

export default Table;
