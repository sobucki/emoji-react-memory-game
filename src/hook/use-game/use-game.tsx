import { useCallback, useEffect, useMemo, useState } from "react";
import { duplicateUniqueList, shuffle } from "../../util/utils";
import useTimer from "../use-timer";
import { getSizeByLevel } from "./categories/utils";
import { StartGameProps } from "./types";

const CARD_FLIP_DELAY = 1000; //one seconds in milliseconds

function useGame() {
  const [currentOptionCards, setCurrentOptionCards] = useState<string[]>([]);
  const [currentLevel, setLevel] = useState<string>("normal");

  const {
    formatted: formattedTimer,
    pause,
    start,
  } = useTimer({
    initialValue: 0,
    status: "paused",
  });

  const startGame = useCallback(
    ({ level, optionsCards }: StartGameProps) => {
      setCurrentOptionCards(optionsCards);
      setLevel(level);
      start();
    },
    [start]
  );

  const [counterMatches, setCounterMatches] = useState(0);
  const [isVictory, setIsVictory] = useState(false);

  const [moves, setMoves] = useState(0);

  const [selectedCard, setSelectedCard] = useState<{
    value: string;
    setMatchedCard: (value: boolean) => void;
  } | null>(null);

  const cards = useMemo(() => {
    const duplicatedCards = duplicateUniqueList(
      shuffle(currentOptionCards).slice(0, getSizeByLevel(currentLevel))
    );
    return shuffle(duplicatedCards);
  }, [currentLevel, currentOptionCards]);

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
        }, CARD_FLIP_DELAY);
        setMoves((current) => current + 1);
      }
      setSelectedCard(null);
    } else {
      setSelectedCard({ value, setMatchedCard });
    }
  };

  useEffect(() => {
    if (cards.length !== 0 && counterMatches === cards.length / 2) {
      setIsVictory(true);
      pause();
    }
  }, [counterMatches, cards.length, pause]);

  return {
    cards,
    onRevealCard,
    moves,
    time: formattedTimer,
    win: isVictory,
    startGame,
  };
}

export default useGame;
