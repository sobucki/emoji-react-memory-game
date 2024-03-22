import { useCallback, useEffect, useState } from "react";
import { duplicateUniqueList, shuffle } from "../../util/utils";
import useTimer from "../use-timer";
import { getSizeByLevel } from "./categories/utils";
import { StartGameProps } from "./types";
import { CardInfo, CardStatus } from "../../components/game/section/card/types";

const CARD_FLIP_DELAY = 1000; //one seconds in milliseconds

function useGame() {
  const [currentOptionCards, setCurrentOptionCards] = useState<string[]>([]);
  const [currentLevel, setLevel] = useState<string>("normal");

  const {
    formatted: formattedTimer,
    pause,
    start,
    seconds,
    stop,
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

  const [selectedCard, setSelectedCard] = useState<CardInfo>();

  const [cards, setCards] = useState<CardInfo[]>([]);
  useEffect(() => {
    const duplicatedCards = duplicateUniqueList(
      shuffle(currentOptionCards).slice(0, getSizeByLevel(currentLevel))
    );

    const shuffledCards = shuffle(duplicatedCards);
    setCards(
      shuffledCards.map<CardInfo>((item, index) => ({
        id: index + "",
        status: "hide",
        value: item,
      }))
    );
  }, [currentLevel, currentOptionCards]);

  const updateCardsStatus = (
    ids: string[],
    status: CardStatus,
    log: string
  ) => {
    console.log(log);
    setCards(
      cards.map<CardInfo>((card) =>
        ids.includes(card.id) ? { ...card, status } : card
      )
    );
  };

  const onRevealCard = (card: CardInfo) => {
    updateCardsStatus([card.id], "flipped", card.value + "_fora");
    if (selectedCard) {
      if (card.value === selectedCard.value && card.id !== selectedCard.id) {
        updateCardsStatus(
          [selectedCard.id, card.id],
          "matched",
          card.value + "_dentro_match"
        );
        setCounterMatches((current) => current + 1);
      } else {
        // updateCardsStatus([selectedCard.id, card.id], "flipped");
        setTimeout(() => {
          updateCardsStatus(
            [selectedCard.id, card.id],
            "hide",
            card.value + "_dentro_nao_match"
          );
        }, CARD_FLIP_DELAY);
      }
      setMoves((current) => current + 1);
      setSelectedCard(undefined);
    } else {
      setSelectedCard(card);
    }
  };

  useEffect(() => {
    if (cards.length !== 0 && counterMatches === cards.length / 2) {
      setIsVictory(true);
      pause();
    }
  }, [counterMatches, cards.length, pause]);

  const restart = useCallback(() => {
    setMoves(0);
    stop();
    start();
  }, [start, stop]);

  console.table(cards);
  console.log(selectedCard);

  return {
    cards,
    onRevealCard,
    moves,
    time: formattedTimer,
    win: isVictory,
    startGame,
    seconds,
    restart,
  };
}

export default useGame;
