import { useMemo } from "react";
import { useGameProps } from "./types";
import { duplicateUniqueList, shuffle } from "../../util/utils";

function useGame({ optionCards }: useGameProps) {
  const cards = useMemo(() => {
    const duplicatedCards = duplicateUniqueList(optionCards.slice(0, 10));
    return shuffle(duplicatedCards);
  }, [optionCards]);

  return { cards };
}

export default useGame;
