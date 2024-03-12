import { useMemo, useState } from "react";
import { useGameProps } from "./types";
import { duplicateUniqueList, shuffle } from "../../util/utils";
import useTimer from "../use-timer";

function useGame({ optionCards }: useGameProps) {
  const { formatted: formattedTimer } = useTimer({ initialValue: 0 });
  const cards = useMemo(() => {
    const duplicatedCards = duplicateUniqueList(optionCards.slice(0, 10));
    return shuffle(duplicatedCards);
  }, [optionCards]);

  const [moves, setMoves] = useState(0);

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
        setMoves((current) => current + 1);
      } else {
        setTimeout(() => {
          setMatchedCard(false);
          selectedCard.setMatchedCard(false);
        }, 1000);
        setMoves((current) => current + 1);
      }
      setSelectedCard(null);
    } else {
      setSelectedCard({ value, setMatchedCard });
    }
  };

  return { cards, onRevealCard, moves, time: formattedTimer };
}

export default useGame;
