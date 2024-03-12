import { useMemo, useState } from "react";
import { useGameProps } from "./types";
import { duplicateUniqueList, shuffle } from "../../util/utils";

function useGame({ optionCards }: useGameProps) {
  const cards = useMemo(() => {
    const duplicatedCards = duplicateUniqueList(optionCards.slice(0, 10));
    return shuffle(duplicatedCards);
  }, [optionCards]);

  const [selectedCard, setSelectedCard] = useState<{
    value: string;
    setMatchedCard: (value: boolean) => void;
  } | null>(null);

  const onRevealCard = (
    value: string,
    setMatchedCard: (value: boolean) => void
  ) => {
    if (selectedCard) {
      if (value === selectedCard.value) {
        setMatchedCard(true);
        selectedCard.setMatchedCard(true);
      } else {
        setTimeout(() => {
          setMatchedCard(false);
          selectedCard.setMatchedCard(false);
        }, 1000);
      }
      setSelectedCard(null);
    } else {
      setSelectedCard({ value, setMatchedCard });
    }
  };

  return { cards, onRevealCard };
}

export default useGame;