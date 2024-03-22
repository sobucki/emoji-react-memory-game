import { ShuffleProps } from "./types";

function useCards() {
  const shuffleCards = ({ category, level }: ShuffleProps) => {};

  return { shuffledCards: [], shuffleCards };
}

export default useCards;
