import { useEffect, useMemo, useState } from "react";
import { useGameProps } from "./types";
import { duplicateUniqueList, shuffle } from "../../util/utils";
import useTimer from "../use-timer";

function useGame({ optionCards }: useGameProps) {
  const { formatted: formattedTimer, pause } = useTimer({ initialValue: 0 });
  const [counterMatches, setCounterMatches] = useState(0);
  const [isVictory, setIsVictory] = useState(false);

  const [moves, setMoves] = useState(0);

  const [selectedCard, setSelectedCard] = useState<{
    value: string;
    setMatchedCard: (value: boolean) => void;
  } | null>(null);

  const cards = useMemo(() => {
    const duplicatedCards = duplicateUniqueList(optionCards.slice(0, 10));
    return shuffle(duplicatedCards);
  }, [optionCards]);

  const onRevealCard = (
    value: string,
    setMatchedCard: (value: boolean) => void
  ) => {
    if (selectedCard) {
      if (value === selectedCard.value) {
        setMatchedCard(true);
        selectedCard.setMatchedCard(true);
        setMoves((current) => current + 1);
        setCounterMatches((current) => current + 1);
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

  useEffect(() => {
    if (counterMatches === cards.length / 2) {
      setIsVictory(true);
      pause();
    }
  }, [counterMatches, cards, pause]);

  return { cards, onRevealCard, moves, time: formattedTimer, win: isVictory };
}

export default useGame;
